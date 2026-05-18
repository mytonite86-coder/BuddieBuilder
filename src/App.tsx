import { useState, useCallback } from 'react';
import {
  PART_ORDER, PART_OPTIONS, PART_LABELS, ACTIONS,
  DEFAULT_COLORS, Selections, PartKey, ActionId
} from './types';
import CharacterSVG from './components/CharacterSVG';
import ColorWheel from './components/ColorWheel';
import { ChevronLeft, Star, RotateCcw } from 'lucide-react';

type Phase = 'build' | 'play';

const PART_ICONS: Record<PartKey, string> = {
  body: '🫧',
  eyes: '👀',
  mouth: '😄',
  hair: '✨',
  arms: '💪',
  legs: '🦵',
};

const BG_GRADIENTS: Record<PartKey, string> = {
  body: 'from-rose-900 via-slate-900 to-slate-800',
  eyes: 'from-teal-900 via-slate-900 to-slate-800',
  mouth: 'from-orange-900 via-slate-900 to-slate-800',
  hair: 'from-yellow-900 via-slate-900 to-slate-800',
  arms: 'from-green-900 via-slate-900 to-slate-800',
  legs: 'from-pink-900 via-slate-900 to-slate-800',
};

function OptionPreview({ part, optionId, color }: { part: PartKey; optionId: string; color: string }) {
  const sel: Partial<Selections> = {
    body: part === 'body' ? optionId : 'round',
    eyes: part === 'eyes' ? optionId : 'happy',
    mouth: part === 'mouth' ? optionId : 'big_smile',
    hair: part === 'hair' ? optionId : 'spiky',
    arms: part === 'arms' ? optionId : 'normal',
    legs: part === 'legs' ? optionId : 'normal',
    colors: {
      body: part === 'body' ? color : DEFAULT_COLORS.body,
      eyes: part === 'eyes' ? color : DEFAULT_COLORS.eyes,
      mouth: part === 'mouth' ? color : DEFAULT_COLORS.mouth,
      hair: part === 'hair' ? color : DEFAULT_COLORS.hair,
      arms: part === 'arms' ? color : DEFAULT_COLORS.arms,
      legs: part === 'legs' ? color : DEFAULT_COLORS.legs,
    },
  };
  return (
    <div className="w-full h-full">
      <CharacterSVG selections={sel} />
    </div>
  );
}

function PartSelector({
  part,
  currentColor,
  onSelect,
  onColorChange,
}: {
  part: PartKey;
  currentColor: string;
  onSelect: (optionId: string) => void;
  onColorChange: (color: string) => void;
}) {
  const options = PART_OPTIONS[part];
  const label = PART_LABELS[part];

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-black text-white text-center mb-1 tracking-wide drop-shadow">
        Pick your <span className="shimmer-text">{label}</span>!
      </h2>
      <p className="text-white/50 text-center text-xs mb-3">
        Choose a color, then tap your favorite!
      </p>

      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white/5 rounded-2xl p-3 border border-white/10">
          <ColorWheel onColorChange={onColorChange} currentColor={currentColor} />
        </div>

        <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className="part-card flex items-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/50 rounded-2xl p-2 text-left"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-slate-800/60 rounded-xl overflow-hidden border border-white/10">
                <OptionPreview part={part} optionId={opt.id} color={currentColor} />
              </div>
              <span className="text-white font-black text-base">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex gap-1.5 items-center justify-center mb-3">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="h-2.5 rounded-full transition-all duration-500"
          style={{
            width: i < step ? 24 : 14,
            backgroundColor: i < step ? '#FFE66D' : i === step ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
          }}
        />
      ))}
    </div>
  );
}

function ActionButton({ action, isActive, onClick }: { action: typeof ACTIONS[0]; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="part-card flex flex-col items-center justify-center gap-1 rounded-2xl p-3 border-2 font-black text-base transition-all"
      style={{
        backgroundColor: isActive ? 'rgba(255,230,109,0.2)' : 'rgba(255,255,255,0.08)',
        borderColor: isActive ? '#FFE66D' : 'rgba(255,255,255,0.2)',
        color: isActive ? '#FFE66D' : 'white',
        boxShadow: isActive ? '0 0 20px rgba(255,230,109,0.4)' : 'none',
      }}
    >
      <span className="text-2xl">{action.emoji}</span>
      <span>{action.label}</span>
    </button>
  );
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('build');
  const [stepIndex, setStepIndex] = useState(0);
  const [colors, setColors] = useState<Record<PartKey, string>>({ ...DEFAULT_COLORS });
  const [selections, setSelections] = useState<Record<PartKey, string>>({
    body: '', eyes: '', mouth: '', hair: '', arms: '', legs: '',
  });
  const [activeAction, setActiveAction] = useState<ActionId | null>(null);

  const currentPart = PART_ORDER[stepIndex];
  const totalSteps = PART_ORDER.length;
  const isComplete = stepIndex >= totalSteps;

  const handleColorChange = useCallback((color: string) => {
    setColors((prev) => ({ ...prev, [currentPart]: color }));
  }, [currentPart]);

  const handleSelect = useCallback((optionId: string) => {
    setSelections((prev) => ({ ...prev, [currentPart]: optionId }));
    setStepIndex((i) => i + 1);
  }, [currentPart]);

  const handleBack = useCallback(() => {
    if (phase === 'play') {
      setPhase('build');
      setStepIndex(totalSteps - 1);
      setActiveAction(null);
      return;
    }
    if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
    }
  }, [phase, totalSteps, stepIndex]);

  const handleReset = useCallback(() => {
    setStepIndex(0);
    setPhase('build');
    setActiveAction(null);
    setSelections({ body: '', eyes: '', mouth: '', hair: '', arms: '', legs: '' });
    setColors({ ...DEFAULT_COLORS });
  }, []);

  const handlePlayPhase = useCallback(() => {
    setPhase('play');
    setActiveAction(null);
  }, []);

  const handleActionClick = useCallback((id: ActionId) => {
    setActiveAction((prev) => prev === id ? null : id);
  }, []);

  const builtSelections: Partial<Selections> = {
    ...selections,
    colors,
  };

  const bgGrad = isComplete || phase === 'play'
    ? 'from-slate-900 via-slate-800 to-slate-900'
    : BG_GRADIENTS[currentPart];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGrad} transition-all duration-700 flex flex-col overflow-hidden`} style={{ height: '100dvh' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-4 pb-1 flex-shrink-0">
        <div style={{ width: 80 }}>
          {(stepIndex > 0 || phase === 'play') && (
            <button
              onClick={handleBack}
              className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl px-3 py-2 border border-white/20 transition-all active:scale-95 text-sm"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          )}
        </div>

        <h1 className="text-3xl font-black tracking-tighter shimmer-text drop-shadow-lg">
          BuddieBuilder
        </h1>

        <div style={{ width: 80 }} className="flex justify-end">
          <button
            onClick={handleReset}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl px-3 py-2 border border-white/20 transition-all active:scale-95"
            title="Start over"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </header>

      {/* Progress dots */}
      {phase === 'build' && !isComplete && (
        <div className="px-4 flex-shrink-0">
          <div className="flex gap-3 items-center justify-center mb-1">
            {PART_ORDER.map((p, i) => (
              <div
                key={p}
                className="flex flex-col items-center transition-all duration-300"
                style={{ opacity: i <= stepIndex ? 1 : 0.3, transform: i === stepIndex ? 'scale(1.3)' : 'scale(1)' }}
              >
                <span className="text-lg leading-none">{PART_ICONS[p]}</span>
              </div>
            ))}
          </div>
          <ProgressBar step={stepIndex} total={totalSteps} />
        </div>
      )}

      {/* Main */}
      <main className="flex-1 flex gap-3 px-4 pb-4 min-h-0 overflow-hidden">
        {/* Character panel */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 gap-2" style={{ width: 160 }}>
          <div
            className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-white/5 w-full"
            style={{ aspectRatio: '3/4' }}
          >
            <CharacterSVG
              selections={builtSelections}
              activeAction={activeAction}
              highlightPart={!isComplete && phase === 'build' ? currentPart : null}
              previewColor={!isComplete && phase === 'build' ? colors[currentPart] : null}
            />
          </div>

          {phase === 'play' && activeAction && (
            <div
              className="text-3xl bubble-float text-center"
              key={activeAction + Date.now()}
            >
              {ACTIONS.find((a) => a.id === activeAction)?.emoji}
            </div>
          )}

          {phase === 'play' && activeAction && (
            <div className="text-white/70 font-black text-sm text-center">
              {ACTIONS.find((a) => a.id === activeAction)?.label}
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {phase === 'build' && !isComplete && (
            <PartSelector
              part={currentPart}
              currentColor={colors[currentPart]}
              onSelect={handleSelect}
              onColorChange={handleColorChange}
            />
          )}

          {phase === 'build' && isComplete && (
            <div className="flex flex-col items-center justify-center h-full gap-5 bounce-in">
              <div className="text-center">
                <div className="text-5xl mb-2">🎉</div>
                <h2 className="text-2xl font-black text-white drop-shadow leading-tight">
                  Your Buddie<br />is ready!
                </h2>
                <p className="text-white/50 mt-1 text-sm">Make them do something fun!</p>
              </div>
              <button
                onClick={handlePlayPhase}
                className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-slate-900 font-black text-xl rounded-2xl px-6 py-3 shadow-lg active:scale-95 transition-all"
              >
                <Star size={22} fill="currentColor" />
                Let's Play!
              </button>
            </div>
          )}

          {phase === 'play' && (
            <div className="flex flex-col h-full gap-2 overflow-y-auto">
              <h2 className="text-xl font-black text-white text-center drop-shadow flex-shrink-0">
                What should Buddie do?
              </h2>
              <div className="grid grid-cols-2 gap-2 flex-1">
                {ACTIONS.map((action) => (
                  <ActionButton
                    key={action.id}
                    action={action}
                    isActive={activeAction === action.id}
                    onClick={() => handleActionClick(action.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
