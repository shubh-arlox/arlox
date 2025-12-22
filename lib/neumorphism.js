// lib/neumorphism.js

export const neu = {
  outer:
    'bg-[#E0E5EC] shadow-[8px_8px_16px_#bec3ca,-8px_-8px_16px_#ffffff]',
  inner:
    'bg-[#E0E5EC] shadow-[inset_6px_6px_12px_#bec3ca,inset_-6px_-6px_12px_#ffffff]',
  flat:
    'bg-[#E0E5EC] shadow-[4px_4px_8px_#bec3ca,-4px_-4px_8px_#ffffff]',
  hover:
    'hover:shadow-[10px_10px_20px_#bec3ca,-10px_-10px_20px_#ffffff] active:shadow-[inset_4px_4px_8px_#bec3ca,inset_-4px_-4px_8px_#ffffff]',
};

export function NeumorphicCard({ children, className = '', ...props }) {
  return (
    <div className={`${neu.outer} rounded-3xl p-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
