import { useState } from 'react';
import treeImage from '/mission/tree.png';

interface HiddenSnakeProps {
  x: number;
  y: number;
}

export function HiddenSnake({ x, y }: HiddenSnakeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = '/snake';
  };

  return (
    <g
      transform={`translate(${x}, ${y})`}
      style={{ cursor: 'pointer', pointerEvents: 'all' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      
      <image
        href={treeImage}
        x="-40"
        y="-50"
        width="80"
        height="100"
        preserveAspectRatio="xMidYMid meet"
      />
      
      
      <g 
        style={{ 
          opacity: isHovered ? 1 : 0.5,
          transform: isHovered ? 'translate(5px, -5px)' : 'translate(0, 0)',
          transition: 'all 0.3s ease',
        }}
      >
        
        <image
          href="/snake/skins/classic/head.png"
          x="5"
          y="-20"
          width="30"
          height="30"
          style={{
            filter: 'drop-shadow(2px 2px 0px #000)',
          }}
        />
      </g>
      
      
      {isHovered && (
        <g>
          <rect
            x="-45"
            y="-65"
            width="90"
            height="28"
            rx="0"
            fill="#facc15"
            stroke="#000"
            strokeWidth="3"
          />
          <rect
            x="-42"
            y="-62"
            width="84"
            height="22"
            fill="#fef08a"
            stroke="#000"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-46"
            textAnchor="middle"
            fill="#000"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
          >
            Sssecret!
          </text>
        </g>
      )}
    </g>
  );
}
