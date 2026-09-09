import { PointerEvent as ReactPointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { ACTIONS, ActionId, DEFAULT_COLORS, PART_LABELS, PART_OPTIONS, PART_ORDER, PartKey, Selections } from './types';
import CharacterSVG from './components/CharacterSVG';
import OfflineStatus from './components/OfflineStatus';
import { ChevronLeft, ChevronRight, RotateCcw, Star } from 'lucide-react';

type Phase = 'build' | 'play';
type DragState = { optionId: string; label: string; x: number; y: number; overTarget: boolean };

const PART_ICONS: Record<PartKey, string> = { body: '🫧', eyes: '👀', mouth: '😄', hair: '✨', arms: '💪', legs: '🦵' };
const BG_GRADIENTS: Record<PartKey, string> = {
  body: 'from-rose-900 via-slate-900 to-slate-800', eyes: 'from-teal-900 via-slate-900 to-slate-800',
  mouth: 'from-orange-900 via-slate-900 to-slate-800', hair: 'from-yellow-900 via-slate-900 to-slate-800',
  arms: 'from-green-900 via-slate-900 to-slate-800', legs: 'from-pink-900 via-slate-900 to-slate-800',
};
const DROP_ZONES: Record<PartKey, { left: number; top: number; width: number; height: number }> = {
  body: { left: 18, top: 25, width: 64, height: 54 }, eyes: { left: 24, top: 31, width: 52, height: 25 },
  mouth: { left: 27, top: 45, width: 46, height: 22 }, hair: { left: 18, top: 4, width: 64, height: 38 },
  arms: { left: 2, top: 30, width: 96, height: 40 }, legs: { left: 18, top: 65, width: 64, height: 34 },
};
const EMPTY_SELECTIONS: Record<PartKey, string> = { body: '', eyes: '', mouth: '', hair: '', arms: '', legs: '' };
const CHILD_PALETTES: Partial<Record<PartKey, { name: string; value: string }[]>> = {
  body: [
    { name: 'Pumpkin', value: '#FF7A45' }, { name: 'Slime', value: '#65D46E' },
    { name: 'Moon', value: '#FFE66D' }, { name: 'Ghost', value: '#F4F1FF' },
    { name: 'Potion', value: '#9D7BFF' }, { name: 'Lagoon', value: '#42C7C7' },
  ],
  hair: [
    { name: 'Midnight', value: '#342B4A' }, { name: 'Pumpkin', value: '#FF7A45' },
    { name: 'Moon', value: '#FFE66D' }, { name: 'Berry', value: '#C94F8A' },
    { name: 'Moss', value: '#557A46' }, { name: 'Ghost', value: '#F4F1FF' },
  ],
};

function previewSelections(part: PartKey, optionId: string, color: string): Partial<Selections> {
  return {
    body: part === 'body' ? optionId : 'round', eyes: part === 'eyes' ? optionId : 'happy',
    mouth: part === 'mouth' ? optionId : 'big_smile', hair: part === 'hair' ? optionId : 'spiky',
    arms: part === 'arms' ? optionId : 'normal', legs: part === 'legs' ? optionId : 'normal',
    colors: { ...DEFAULT_COLORS, [part]: color },
  };
}

function OptionPreview({ part, optionId, color }: { part: PartKey; optionId: string; color: string }) {
  return <CharacterSVG selections={previewSelections(part, optionId, color)} />;
}

function SimplePalette({ part, currentColor, onColorChange }: {
  part: PartKey; currentColor: string; onColorChange: (color: string) => void;
}) {
  const palette = CHILD_PALETTES[part];
  if (!palette) return null;
  return <fieldset className="simple-palette">
    <legend>{part === 'body' ? 'Pick a monster color' : 'Pick a hair color'}</legend>
    <div className="palette-swatches">
      {palette.map((color) => <button key={color.value} type="button" aria-label={`${color.name} ${part} color`}
        aria-pressed={currentColor === color.value} onClick={() => onColorChange(color.value)}
        className={`palette-swatch ${currentColor === color.value ? 'palette-swatch-selected' : ''}`}>
        <span className="palette-color" style={{ backgroundColor: color.value }} aria-hidden="true" />
        <span>{color.name}</span>
      </button>)}
    </div>
  </fieldset>;
}

function PartSelector({ part, currentColor, selectedId, onSelect, onColorChange, onDragStart }: {
  part: PartKey; currentColor: string; selectedId: string; onSelect: (id: string) => void;
  onColorChange: (color: string) => void;
  onDragStart: (event: ReactPointerEvent<HTMLButtonElement>, optionId: string, label: string) => void;
}) {
  return (
    <section className="flex flex-col gap-3" aria-labelledby="part-picker-title">
      <div className="text-center">
        <h2 id="part-picker-title" className="text-2xl font-black text-white">Try some <span className="shimmer-text">{PART_LABELS[part]}</span>!</h2>
        <p className="text-white/65 text-sm">Tap one, or drag it onto the glowing spot.</p>
      </div>
      <SimplePalette part={part} currentColor={currentColor} onColorChange={onColorChange} />
      <div className="toy-shelf" role="group" aria-label={`${PART_LABELS[part]} monster part shelf`}>
        <div className="shelf-sign" aria-hidden="true"><span>🦇</span> Monster Part Shelf <span>🎃</span></div>
        <div className="part-tray" role="list" aria-label={`${PART_LABELS[part]} choices`}>
        {PART_OPTIONS[part].map((option) => (
          <button key={option.id} type="button"
            aria-label={`Choose ${option.label} ${PART_LABELS[part].toLowerCase()}`} aria-pressed={selectedId === option.id}
            className={`part-tile ${selectedId === option.id ? 'part-tile-selected' : ''}`}
            onClick={() => onSelect(option.id)}
            onPointerDown={(event) => onDragStart(event, option.id, option.label)}>
            <span className="part-tile-preview" aria-hidden="true"><OptionPreview part={part} optionId={option.id} color={currentColor} /></span>
            <span className="text-sm font-black text-white">{option.label}</span>
            {selectedId === option.id && <span className="part-selected-badge" aria-hidden="true">✓</span>}
          </button>
        ))}
        </div>
        <div className="shelf-board" aria-hidden="true" />
      </div>
    </section>
  );
}

function ProgressBar({ step }: { step: number }) {
  return <div className="flex gap-2 items-center justify-center" aria-label={`Step ${step + 1} of ${PART_ORDER.length}`}>
    {PART_ORDER.map((part, index) => <div key={part} className="flex flex-col items-center gap-1">
      <span className="text-lg leading-none" style={{ opacity: index <= step ? 1 : 0.3 }}>{PART_ICONS[part]}</span>
      <span className="h-2 rounded-full" style={{ width: index === step ? 28 : 14, backgroundColor: index < step ? '#FFE66D' : index === step ? 'white' : 'rgba(255,255,255,.18)' }} />
    </div>)}
  </div>;
}

function ActionButton({ action, isActive, onClick }: { action: typeof ACTIONS[0]; isActive: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} className="part-card flex flex-col items-center justify-center gap-1 rounded-2xl p-3 border-2 font-black text-base"
    style={{ backgroundColor: isActive ? 'rgba(255,230,109,.2)' : 'rgba(255,255,255,.08)', borderColor: isActive ? '#FFE66D' : 'rgba(255,255,255,.2)', color: isActive ? '#FFE66D' : 'white' }}>
    <span className="text-2xl">{action.emoji}</span><span>{action.label}</span>
  </button>;
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('build');
  const [stepIndex, setStepIndex] = useState(0);
  const [colors, setColors] = useState<Record<PartKey, string>>({ ...DEFAULT_COLORS });
  const [selections, setSelections] = useState<Record<PartKey, string>>({ ...EMPTY_SELECTIONS });
  const [activeAction, setActiveAction] = useState<ActionId | null>(null);
  const [drag, setDrag] = useState<DragState | null>(null);
  const [acceptedPart, setAcceptedPart] = useState<PartKey | null>(null);
  const characterPanelRef = useRef<HTMLDivElement>(null);
  const dragOrigin = useRef<{ x: number; y: number; pointerId: number } | null>(null);
  const totalSteps = PART_ORDER.length;
  const isComplete = stepIndex >= totalSteps;
  const currentPart = PART_ORDER[Math.min(stepIndex, totalSteps - 1)];

  const selectPart = useCallback((optionId: string) => {
    setSelections((previous) => ({ ...previous, [currentPart]: optionId }));
    setAcceptedPart(currentPart);
    window.setTimeout(() => setAcceptedPart(null), 360);
  }, [currentPart]);
  const isPointInTarget = useCallback((x: number, y: number) => {
    const panel = characterPanelRef.current;
    if (!panel) return false;
    const bounds = panel.getBoundingClientRect();
    const zone = DROP_ZONES[currentPart];
    const left = bounds.left + bounds.width * zone.left / 100;
    const top = bounds.top + bounds.height * zone.top / 100;
    return x >= left && x <= left + bounds.width * zone.width / 100 && y >= top && y <= top + bounds.height * zone.height / 100;
  }, [currentPart]);
  const beginDrag = useCallback((event: ReactPointerEvent<HTMLButtonElement>, optionId: string, label: string) => {
    dragOrigin.current = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
    setDrag({ optionId, label, x: event.clientX, y: event.clientY, overTarget: false });
  }, []);
  useEffect(() => {
    if (!drag || !dragOrigin.current) return;
    const move = (event: PointerEvent) => {
      if (event.pointerId !== dragOrigin.current?.pointerId) return;
      setDrag((active) => active ? { ...active, x: event.clientX, y: event.clientY, overTarget: isPointInTarget(event.clientX, event.clientY) } : null);
    };
    const finish = (event: PointerEvent) => {
      const origin = dragOrigin.current;
      if (!origin || event.pointerId !== origin.pointerId) return;
      const moved = Math.hypot(event.clientX - origin.x, event.clientY - origin.y) > 7;
      if (moved && isPointInTarget(event.clientX, event.clientY)) selectPart(drag.optionId);
      dragOrigin.current = null;
      setDrag(null);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', finish);
    window.addEventListener('pointercancel', finish);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', finish);
      window.removeEventListener('pointercancel', finish);
    };
  }, [drag, isPointInTarget, selectPart]);
  const back = () => {
    if (phase === 'play') { setPhase('build'); setStepIndex(totalSteps - 1); setActiveAction(null); }
    else if (stepIndex > 0) setStepIndex((index) => index - 1);
  };
  const reset = () => { setStepIndex(0); setPhase('build'); setActiveAction(null); setDrag(null); setSelections({ ...EMPTY_SELECTIONS }); setColors({ ...DEFAULT_COLORS }); };
  const builtSelections: Partial<Selections> = { ...selections, colors };
  const zone = DROP_ZONES[currentPart];

  return <div className={`min-h-screen bg-gradient-to-br ${isComplete || phase === 'play' ? 'from-slate-900 via-slate-800 to-slate-900' : BG_GRADIENTS[currentPart]} flex flex-col`}>
    <header className="flex items-center justify-between px-4 pt-4 pb-2">
      <div className="w-20">{(stepIndex > 0 || phase === 'play') && <button type="button" onClick={back} className="nav-button"><ChevronLeft size={18} /> Back</button>}</div>
      <h1 className="text-3xl font-black tracking-tighter shimmer-text">BuddieBuilder</h1>
      <div className="w-20 flex justify-end"><button type="button" onClick={reset} className="nav-button" aria-label="Start over" title="Start over"><RotateCcw size={18} /></button></div>
    </header>
    {phase === 'build' && !isComplete && <ProgressBar step={stepIndex} />}
    <main className="build-layout flex-1 px-4 pb-5">
      <section className="flex flex-col items-center justify-center gap-2" aria-label="Your buddy preview">
        <p className="text-white/70 text-sm font-bold">{phase === 'build' && !isComplete ? `Fit the ${PART_LABELS[currentPart].toLowerCase()} here` : 'Your buddy'}</p>
        <div ref={characterPanelRef} className={`character-panel ${drag?.overTarget ? 'drop-target-active' : ''} ${acceptedPart === currentPart ? 'placement-accepted' : ''}`} data-drop-part={phase === 'build' && !isComplete ? currentPart : undefined}>
          <CharacterSVG selections={builtSelections} activeAction={activeAction} highlightPart={!isComplete && phase === 'build' ? currentPart : null} previewColor={!isComplete && phase === 'build' ? colors[currentPart] : null} />
          {phase === 'build' && !isComplete && drag && <div className={`semantic-drop-zone ${drag.overTarget ? 'semantic-drop-zone-active' : ''}`}
            style={{ left: `${zone.left}%`, top: `${zone.top}%`, width: `${zone.width}%`, height: `${zone.height}%` }} aria-hidden="true">
            <span>{drag.overTarget ? 'Let go!' : PART_LABELS[currentPart]}</span>
          </div>}
        </div>
        {phase === 'play' && activeAction && <div className="text-white/80 font-black">{ACTIONS.find((action) => action.id === activeAction)?.label}</div>}
      </section>
      <section className="flex flex-col justify-center min-w-0">
        {phase === 'build' && !isComplete && <>
          <PartSelector part={currentPart} currentColor={colors[currentPart]} selectedId={selections[currentPart]} onSelect={selectPart}
            onColorChange={(color) => setColors((previous) => ({ ...previous, [currentPart]: color }))} onDragStart={beginDrag} />
          <button type="button" onClick={() => { if (selections[currentPart]) setStepIndex((index) => index + 1); }} disabled={!selections[currentPart]} className="next-button">
            {stepIndex === totalSteps - 1 ? 'Finish my buddy' : `Next: ${PART_LABELS[PART_ORDER[stepIndex + 1]]}`} <ChevronRight size={22} />
          </button>
        </>}
        {phase === 'build' && isComplete && <div className="flex flex-col items-center gap-5 bounce-in text-center">
          <div className="text-5xl">🎉</div><h2 className="text-2xl font-black text-white">Your Buddie is ready!</h2>
          <button type="button" onClick={() => setPhase('play')} className="next-button"><Star size={22} fill="currentColor" /> Let's Play!</button>
        </div>}
        {phase === 'play' && <div className="flex flex-col gap-3"><h2 className="text-xl font-black text-white text-center">What should Buddie do?</h2>
          <div className="grid grid-cols-2 gap-2">{ACTIONS.map((action) => <ActionButton key={action.id} action={action} isActive={activeAction === action.id}
            onClick={() => setActiveAction((previous) => previous === action.id ? null : action.id)} />)}</div>
        </div>}
      </section>
    </main>
    <OfflineStatus />
    {drag && <div className={`drag-preview ${drag.overTarget ? 'drag-preview-valid' : ''}`} style={{ left: drag.x, top: drag.y }} aria-hidden="true">
      <OptionPreview part={currentPart} optionId={drag.optionId} color={colors[currentPart]} /><span>{drag.label}</span>
    </div>}
  </div>;
}
