interface OurPickBadgeProps {
  color?: 'green' | 'blue';
}

export default function OurPick({ color = 'green' }: OurPickBadgeProps) {
  const backgroundColor = color === 'green' ? '#BFF921' : '#2727C5';
  
  return (
    <div
      className="inline-block px-[2px] mb-2 text-xs uppercase font-[family-name:var(--font-elevatica)]"
      style={{ backgroundColor, color: '#A0A0A0' }}
    >
      OUR PICK
    </div>
  );
}

