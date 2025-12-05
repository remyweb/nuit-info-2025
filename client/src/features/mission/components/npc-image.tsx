import type { NPCType } from '../types';

interface NPCImageProps {
  type: NPCType;
  isResolved?: boolean;
  size?: number;
  className?: string;
}

const getNPCImage = (type: NPCType): string => {
  const images: Record<NPCType, string> = {
    teacher: '/mission/prof.png',
    student: '/mission/student.png',
    admin: '/mission/intendant.png',
    director: '/mission/directrice.png',
    sysadmin: '/mission/sysadmin.png', // fallback to intendant for now
  };
  return images[type];
};

export function NPCImage({ type, isResolved = false, size = 48, className = '' }: NPCImageProps) {
  const statusAnimation = isResolved ? '' : 'animate-pulse';

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      
      <div 
        className={`absolute inset-0 ${statusAnimation}`}
        style={{ width: size, height: size }}
      />
      
      
      <img 
        src={getNPCImage(type)} 
        alt={`NPC ${type}`} 
        draggable={false}
        className="h-full w-full object-cover pixelated"
      />

      
      {!isResolved && (
        <div 
          className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center text-[10px] font-bold text-white"
        >
          !
        </div>
      )}
    </div>
  );
}
