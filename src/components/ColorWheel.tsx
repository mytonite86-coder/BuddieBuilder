import { useRef, useEffect, useCallback } from 'react';

interface ColorWheelProps {
  onColorChange: (color: string) => void;
  currentColor: string;
}

export default function ColorWheel({ onColorChange, currentColor }: ColorWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const size = 120;
  const center = size / 2;
  const radius = size / 2 - 4;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);

    for (let angle = 0; angle < 360; angle++) {
      const startAngle = ((angle - 1) * Math.PI) / 180;
      const endAngle = ((angle + 1) * Math.PI) / 180;
      const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
      gradient.addColorStop(0, `hsl(${angle}, 10%, 100%)`);
      gradient.addColorStop(0.5, `hsl(${angle}, 100%, 60%)`);
      gradient.addColorStop(1, `hsl(${angle}, 100%, 40%)`);
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Brightness strip at top
    const bGrad = ctx.createLinearGradient(0, 0, size, 0);
    bGrad.addColorStop(0, 'rgba(0,0,0,0)');
    bGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = bGrad;
    ctx.fill();
  }, []);

  const pickColor = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    const dx = x - center;
    const dy = y - center;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > radius) return;

    const pixel = ctx.getImageData(Math.round(x), Math.round(y), 1, 1).data;
    const hex = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`;
    onColorChange(hex);
  }, [onColorChange, center, radius]);

  const presets = [
    '#FF6B6B', '#FF8C42', '#FFE66D', '#A8E6CF',
    '#4ECDC4', '#45B7D1', '#FF6B9D', '#C3A6FF',
    '#FFFFFF', '#000000',
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-sm font-bold text-white/80 uppercase tracking-widest">Color</div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="rounded-full cursor-crosshair shadow-lg border-4 border-white/20"
          style={{ width: size, height: size }}
          onClick={pickColor}
          onMouseMove={(e) => { if (e.buttons === 1) pickColor(e); }}
          onTouchMove={pickColor}
          onTouchStart={pickColor}
        />
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: `0 0 0 4px ${currentColor}, 0 0 20px ${currentColor}88`,
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-2 max-w-[140px]">
        {presets.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className="w-7 h-7 rounded-full border-2 transition-transform hover:scale-125 active:scale-110"
            style={{
              backgroundColor: color,
              borderColor: currentColor === color ? 'white' : 'rgba(255,255,255,0.3)',
              boxShadow: currentColor === color ? `0 0 8px ${color}` : 'none',
            }}
          />
        ))}
      </div>
      <div
        className="w-12 h-12 rounded-full border-4 border-white/30 shadow-lg"
        style={{ backgroundColor: currentColor, boxShadow: `0 0 16px ${currentColor}` }}
      />
    </div>
  );
}
