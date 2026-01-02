'use client';
import { useState, useEffect } from 'react';

export default function AdaptiveBadge({ imageSrc, label, flag }) {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 50;
      canvas.height = 50;
      ctx.drawImage(img, img.width - 100, 0, 100, 100, 0, 0, 50, 50);
      const imageData = ctx.getImageData(0, 0, 50, 50);
      const data = imageData.data;
      let r, g, b, avg;
      let colorSum = 0;
      for (let i = 0, len = data.length; i < len; i += 4) {
        r = data[i];
        g = data[i + 1];
        b = data[i + 2];
        avg = Math.floor((r * 0.299) + (g * 0.587) + (b * 0.114));
        colorSum += avg;
      }

      const brightness = Math.floor(colorSum / (50 * 50));
      setIsDarkBg(brightness < 150);
      setIsLoaded(true);
    };
  }, [imageSrc]);

  const lightBadgeStyle = "bg-transparent text-white";
  const darkBadgeStyle = "bg-transparent text-black"; 
  const finalStyle = !isLoaded 
    ? "bg-gray-200/50 text-gray-800 backdrop-blur-md" 
    : isDarkBg 
      ? lightBadgeStyle 
      : darkBadgeStyle;

  return (
    <div 
      className={`absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1 shadow-lg backdrop-blur-md transition-colors duration-500 ${finalStyle}`}
    >
      <span className="text-xs">{flag}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}