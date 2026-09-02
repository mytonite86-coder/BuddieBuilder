import { Selections, ActionId, PartKey } from '../types';

interface Props {
  selections: Partial<Selections>;
  activeAction?: ActionId | null;
  highlightPart?: string | null;
  previewColor?: string | null;
}

function darken(hex: string, amount = 40): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// ─── Body shapes ──────────────────────────────────────────────────────────────
function BodyShape({ id, color }: { id: string; color: string }) {
  const dark = darken(color);
  switch (id) {
    case 'blobby':
      return (
        <g>
          <ellipse cx="100" cy="145" rx="68" ry="80" fill={color} />
          <ellipse cx="72" cy="120" rx="28" ry="24" fill={color} />
          <ellipse cx="128" cy="120" rx="28" ry="24" fill={color} />
          <ellipse cx="100" cy="170" rx="50" ry="60" fill={color} />
          <ellipse cx="100" cy="145" rx="65" ry="77" fill={color} />
          <ellipse cx="100" cy="145" rx="65" ry="77" fill="none" stroke={dark} strokeWidth="2" />
        </g>
      );
    case 'square':
      return (
        <g>
          <rect x="38" y="90" width="124" height="120" rx="18" fill={color} stroke={dark} strokeWidth="2" />
          <rect x="50" y="98" width="100" height="104" rx="12" fill={color} />
        </g>
      );
    case 'star':
      return (
        <g>
         <polygon
           transform="translate(-12 -12) scale(1.12)"
  points="
    100,75
    122,125
    182,128
    136,160
    152,218
    100,188
    48,218
    64,160
    18,128
    78,125
  "

  fill={color}
  stroke={dark}
  strokeWidth="4"

/>
        
        </g>
      );
    case 'diamond':
      return (
        <g>
          <polygon points="100,80 155,140 100,200 45,140" fill={color} stroke={dark} strokeWidth="2" />
        </g>
      );
    default: // round
      return (
        <g>
          <ellipse cx="100" cy="150" rx="65" ry="75" fill={color} stroke={dark} strokeWidth="2" />
        </g>
      );
  }
}

// ─── Eyes ─────────────────────────────────────────────────────────────────────
function EyeShape({ id, color }: { id: string; color: string }) {
  switch (id) {
    case 'surprised':
      return (
        <g>
          <circle cx="80" cy="130" r="13" fill="white" />
          <circle cx="120" cy="130" r="13" fill="white" />
          <circle cx="80" cy="130" r="7" fill={color} />
          <circle cx="120" cy="130" r="7" fill={color} />
          <circle cx="83" cy="128" r="2.5" fill="white" />
          <circle cx="123" cy="128" r="2.5" fill="white" />
        </g>
      );
    case 'sleepy':
      return (
        <g>
          <ellipse cx="80" cy="132" rx="12" ry="7" fill="white" />
          <ellipse cx="120" cy="132" rx="12" ry="7" fill="white" />
          <path d="M68 132 Q80 126 92 132" fill="none" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 132 Q120 126 132 132" fill="none" stroke="#888" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="80" cy="133" rx="7" ry="4" fill={color} />
          <ellipse cx="120" cy="133" rx="7" ry="4" fill={color} />
        </g>
      );
    case 'wink':
      return (
        <g>
          <circle cx="80" cy="130" r="12" fill="white" />
          <circle cx="80" cy="130" r="6" fill={color} />
          <circle cx="83" cy="128" r="2" fill="white" />
          <path d="M109 130 Q120 124 131 130" fill="none" stroke="#555" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );
    case 'love':
      return (
        <g>
          <path d="M72 126 C72 122 76 120 80 124 C84 120 88 122 88 126 C88 130 80 136 80 136 C80 136 72 130 72 126Z" fill={color} />
          <path d="M112 126 C112 122 116 120 120 124 C124 120 128 122 128 126 C128 130 120 136 120 136 C120 136 112 130 112 126Z" fill={color} />
        </g>
      );
    default: // happy
      return (
        <g>
          <circle cx="80" cy="130" r="12" fill="white" />
          <circle cx="120" cy="130" r="12" fill="white" />
          <circle cx="80" cy="130" r="6" fill={color} />
          <circle cx="120" cy="130" r="6" fill={color} />
          <circle cx="82" cy="128" r="2" fill="white" />
          <circle cx="122" cy="128" r="2" fill="white" />
        </g>
      );
  }
}

// ─── Mouth ────────────────────────────────────────────────────────────────────
function MouthShape({ id, color }: { id: string; color: string }) {
  switch (id) {
    case 'laugh':
      return (
        <g>
          <ellipse cx="100" cy="163" rx="22" ry="14" fill={color} />
          <rect x="78" y="163" width="44" height="8" rx="3" fill={color} />
          <line x1="88" y1="163" x2="88" y2="171" stroke="white" strokeWidth="2" />
          <line x1="100" y1="163" x2="100" y2="172" stroke="white" strokeWidth="2" />
          <line x1="112" y1="163" x2="112" y2="171" stroke="white" strokeWidth="2" />
        </g>
      );
    case 'sad':
      return (
        <g>
          <path d="M80 170 Q100 158 120 170" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <circle cx="84" cy="175" r="3" fill="#88CCFF" opacity="0.8" />
          <circle cx="116" cy="176" r="3" fill="#88CCFF" opacity="0.8" />
        </g>
      );
    case 'surprised':
      return (
        <g>
          <ellipse cx="100" cy="164" rx="14" ry="16" fill={color} />
          <ellipse cx="100" cy="166" rx="10" ry="12" fill="#2a1a1a" />
        </g>
      );
    case 'silly':
      return (
        <g>
          <path d="M78 162 Q100 175 122 162" fill={color} stroke={color} strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="100" cy="169" rx="18" ry="10" fill={color} />
          <ellipse cx="100" cy="175" rx="10" ry="6" fill="#FF4466" />
          <path d="M82 162 Q85 155 90 162" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" />
          <path d="M110 162 Q115 155 118 162" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    default: // big_smile
      return (
        <g>
          <path d="M78 160 Q100 180 122 160" fill={color} stroke={darken(color, 20)} strokeWidth="2" strokeLinecap="round" />
          <path d="M78 160 Q100 180 122 160 L122 167 Q100 185 78 167Z" fill={color} />
          <path d="M82 168 Q100 180 118 168" fill="white" opacity="0.4" />
        </g>
      );
  }
}

// ─── Hair ─────────────────────────────────────────────────────────────────────
function HairShape({ id, color, bodyId }: { id: string; color: string; bodyId: string }) {
  const topY = bodyId === 'star' ? 68 : bodyId === 'diamond' ? 78 : bodyId === 'square' ? 88 : 74;
  switch (id) {
    case 'curly':
      return (
        <g>
          {[65, 80, 100, 120, 135].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={topY - 10} r="10" fill={color} />
              <circle cx={x - 4} cy={topY - 16} r="8" fill={color} />
              <circle cx={x + 4} cy={topY - 14} r="8" fill={color} />
            </g>
          ))}
        </g>
      );
    case 'pigtails':
      return (
        <g>
          <ellipse cx="100" cy={topY - 8} rx="36" ry="14" fill={color} />
          <ellipse cx="58" cy={topY + 10} rx="14" ry="22" fill={color} transform={`rotate(-20, 58, ${topY + 10})`} />
          <ellipse cx="142" cy={topY + 10} rx="14" ry="22" fill={color} transform={`rotate(20, 142, ${topY + 10})`} />
        </g>
      );
    case 'mohawk':
      return (
        <g>
          <rect x="91" y={topY - 34} width="18" height="38" rx="9" fill={color} />
          <ellipse cx="100" cy={topY - 34} rx="10" ry="8" fill={color} />
        </g>
      );
    case 'bald':
      return (
        <g>
          <ellipse cx="100" cy={topY - 2} rx="52" ry="16" fill={color} opacity="0.7" />
        </g>
      );
    default: // spiky
      return (
        <g>
          {[68, 80, 94, 108, 122, 134].map((x, i) => (
            <polygon
              key={i}
              points={`${x - 8},${topY} ${x},${topY - 24 - (i % 2) * 8} ${x + 8},${topY}`}
              fill={color}
            />
          ))}
        </g>
      );
  }
}

// ─── Arms ─────────────────────────────────────────────────────────────────────
function ArmShape({ id, color, side, bodyId }: { id: string; color: string; side: 'left' | 'right'; bodyId: string }) {
  const dark = darken(color);
  const isLeft = side === 'left';
  const baseX = isLeft ? 35 : 165;
  const bodyY = bodyId === 'square' ? 110 : 120;

  switch (id) {
    case 'wings':
      return isLeft ? (
        <g>
          <path d={`M38 ${bodyY} C10 ${bodyY - 30} 5 ${bodyY + 20} 20 ${bodyY + 50} C30 ${bodyY + 30} 38 ${bodyY + 20} 38 ${bodyY}`} fill={color} stroke={dark} strokeWidth="1.5" />
          <path d={`M38 ${bodyY} C15 ${bodyY - 10} 12 ${bodyY + 10} 22 ${bodyY + 30}`} fill="none" stroke={dark} strokeWidth="1.5" />
          <path d={`M38 ${bodyY} C18 ${bodyY + 5} 14 ${bodyY + 25} 24 ${bodyY + 45}`} fill="none" stroke={dark} strokeWidth="1.5" />
        </g>
      ) : (
        <g>
          <path d={`M162 ${bodyY} C190 ${bodyY - 30} 195 ${bodyY + 20} 180 ${bodyY + 50} C170 ${bodyY + 30} 162 ${bodyY + 20} 162 ${bodyY}`} fill={color} stroke={dark} strokeWidth="1.5" />
          <path d={`M162 ${bodyY} C185 ${bodyY - 10} 188 ${bodyY + 10} 178 ${bodyY + 30}`} fill="none" stroke={dark} strokeWidth="1.5" />
          <path d={`M162 ${bodyY} C182 ${bodyY + 5} 186 ${bodyY + 25} 176 ${bodyY + 45}`} fill="none" stroke={dark} strokeWidth="1.5" />
        </g>
      );
    case 'fins':
      return isLeft ? (
        <g>
          <ellipse cx="28" cy={bodyY + 20} rx="18" ry="30" fill={color} stroke={dark} strokeWidth="1.5" transform={`rotate(-20, 28, ${bodyY + 20})`} />
          <path d={`M28 ${bodyY + 5} L15 ${bodyY + 50}`} stroke={dark} strokeWidth="1.5" />
          <path d={`M28 ${bodyY + 15} L18 ${bodyY + 52}`} stroke={dark} strokeWidth="1.5" />
        </g>
      ) : (
        <g>
          <ellipse cx="172" cy={bodyY + 20} rx="18" ry="30" fill={color} stroke={dark} strokeWidth="1.5" transform={`rotate(20, 172, ${bodyY + 20})`} />
          <path d={`M172 ${bodyY + 5} L185 ${bodyY + 50}`} stroke={dark} strokeWidth="1.5" />
          <path d={`M172 ${bodyY + 15} L182 ${bodyY + 52}`} stroke={dark} strokeWidth="1.5" />
        </g>
      );
    case 'claws':
      return (
        <g transform={isLeft ? '' : `scale(-1,1) translate(-200,0)`}>
          <rect x="18" y={bodyY + 2} width="20" height="35" rx="6" fill={color} stroke={dark} strokeWidth="1.5" />
          {[12, 20, 28, 36].map((x, i) => (
            <path key={i} d={`M${x} ${bodyY + 38} C${x - 4} ${bodyY + 52} ${x + 4} ${bodyY + 52} ${x + 2} ${bodyY + 38}`} fill={darken(color, 10)} stroke={dark} strokeWidth="1" />
          ))}
        </g>
      );
    case 'tentacles':
      return (
        <g>
          {[0, 1].map((i) => {
            const ox = isLeft ? 30 + i * 12 : 158 + i * 12;
            const dir = isLeft ? -1 : 1;
            return (
              <path
                key={i}
                d={`M${ox} ${bodyY} C${ox + dir * 25} ${bodyY + 20} ${ox - dir * 10} ${bodyY + 50} ${ox + dir * 15} ${bodyY + 65}`}
                fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
              />
            );
          })}
          {[0, 1].map((i) => {
            const ox = isLeft ? 30 + i * 12 : 158 + i * 12;
            const dir = isLeft ? -1 : 1;
            const ex = ox + dir * 15;
            const ey = bodyY + 65;
            return (
              <circle key={i} cx={ex} cy={ey} r="5" fill={darken(color, 20)} />
            );
          })}
        </g>
      );
    default: // normal arms
      return (
        <g>
          <rect
            x={isLeft ? 18 : 158}
            y={bodyY}
            width="20"
            height="38"
            rx="10"
            fill={color}
            stroke={dark}
            strokeWidth="1.5"
            transform={isLeft ? `rotate(-15, ${baseX}, ${bodyY})` : `rotate(15, ${isLeft ? baseX : 165}, ${bodyY})`}
          />
          <circle cx={isLeft ? 24 : 176} cy={bodyY + 42} r="8" fill={color} stroke={dark} strokeWidth="1.5" />
        </g>
      );
  }
}

// ─── Legs ─────────────────────────────────────────────────────────────────────
function LegShape({ id, color, side }: { id: string; color: string; side: 'left' | 'right' }) {
  const dark = darken(color);
  const isLeft = side === 'left';
  const lx = isLeft ? 80 : 120;

  switch (id) {
    case 'hooves':
      return (
        <g>
          <rect x={lx - 9} y="218" width="18" height="30" rx="5" fill={color} stroke={dark} strokeWidth="1.5" />
          <ellipse cx={lx} cy="250" rx="13" ry="8" fill={darken(color, 30)} />
          <path d={`M${lx - 12} 250 Q${lx} 258 ${lx + 12} 250`} fill={darken(color, 30)} stroke={dark} strokeWidth="1" />
        </g>
      );
    case 'flippers':
      return (
        <g>
          <rect x={lx - 9} y="218" width="18" height="25" rx="5" fill={color} stroke={dark} strokeWidth="1.5" />
          <ellipse cx={lx + (isLeft ? -8 : 8)} cy="250" rx="24" ry="8" fill={color} stroke={dark} strokeWidth="1.5" transform={`rotate(${isLeft ? -10 : 10}, ${lx}, 250)`} />
        </g>
      );
    case 'paws':
      return (
        <g>
          <rect x={lx - 9} y="218" width="18" height="28" rx="7" fill={color} stroke={dark} strokeWidth="1.5" />
          <circle cx={lx} cy="252" r="10" fill={color} stroke={dark} strokeWidth="1.5" />
          {[-6, 0, 6].map((ox, i) => (
            <circle key={i} cx={lx + ox} cy="244" r="4" fill={darken(color, 10)} />
          ))}
        </g>
      );
    case 'springs':
      return (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <path
              key={i}
              d={`M${lx - 8} ${218 + i * 8} Q${lx + (i % 2 === 0 ? 12 : -12)} ${222 + i * 8} ${lx - 8} ${226 + i * 8}`}
              fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"
            />
          ))}
          <circle cx={lx} cy="252" r="8" fill={color} stroke={dark} strokeWidth="1.5" />
        </g>
      );
    default: // normal feet
      return (
        <g>
          <rect x={lx - 9} y="218" width="18" height="30" rx="8" fill={color} stroke={dark} strokeWidth="1.5" />
          <ellipse cx={lx + (isLeft ? -4 : 4)} cy="250" rx="16" ry="8" fill={color} stroke={dark} strokeWidth="1.5" />
        </g>
      );
  }
}

// ─── Main Character ────────────────────────────────────────────────────────────
export default function CharacterSVG({ selections, activeAction, highlightPart, previewColor }: Props) {
  const colors = selections.colors ?? {} as Record<string, string>;

  const getColor = (part: PartKey, fallback: string) => {
    if (highlightPart === part && previewColor) return previewColor;
    return colors[part] ?? fallback;
  };

  const bodyColor = getColor('body', '#FF6B6B');
  const eyeColor = getColor('eyes', '#4ECDC4');
  const mouthColor = getColor('mouth', '#FF8C42');
  const hairColor = getColor('hair', '#FFE66D');
  const armColor = getColor('arms', '#A8E6CF');
  const legColor = getColor('legs', '#FF6B9D');

  const bodyId = selections.body ?? 'round';
  const eyeId = selections.eyes ?? 'happy';
  const mouthId = selections.mouth ?? 'big_smile';
  const hairId = selections.hair ?? 'spiky';
  const armId = selections.arms ?? 'normal';
  const legId = selections.legs ?? 'normal';

  let animClass = '';
  if (activeAction === 'dance') animClass = 'char-dance';
  else if (activeAction === 'jump') animClass = 'char-jump';
  else if (activeAction === 'wave') animClass = 'char-wave';
  else if (activeAction === 'spin') animClass = 'char-spin';
  else if (activeAction === 'laugh') animClass = 'char-laugh';
  else if (activeAction === 'sleep') animClass = 'char-sleep';
  else if (activeAction === 'excited') animClass = 'char-excited';

  return (
   <svg
  viewBox="0 0 200 300"
  width="100%"
  height="100%"
  preserveAspectRatio="xMidYMid meet"

      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${animClass}`}
      style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
    >
      <LegShape id={legId} color={legColor} side="left" />
      <LegShape id={legId} color={legColor} side="right" />
      <ArmShape id={armId} color={armColor} side="left" bodyId={bodyId} />
      <ArmShape id={armId} color={armColor} side="right" bodyId={bodyId} />
      <BodyShape id={bodyId} color={bodyColor} />
      <HairShape id={hairId} color={hairColor} bodyId={bodyId} />
      <EyeShape id={eyeId} color={eyeColor} />
      <MouthShape id={mouthId} color={mouthColor} />
    </svg>
  );
}
