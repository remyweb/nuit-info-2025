import type { Building } from '../../types';
import { HiddenSnake } from './hidden-snake';
import treeImage from '/mission/tree.png';
import buildingImage from '/mission/building.png';

interface SchoolMapSVGProps {
  buildings: Building[];
  liberatedBuildings: string[];
  onBuildingClick?: (building: Building) => void;
}

export function SchoolMapSVG({ buildings, liberatedBuildings, onBuildingClick }: SchoolMapSVGProps) {
  const getBuildingFilter = (building: Building, isLiberated: boolean) => {
    if (isLiberated) return 'url(#hue-liberated)';
    
    const filters: Record<string, string> = {
      entrance: 'url(#hue-yellow)',
      classroom: 'url(#hue-red)',
      computerLab: '', // Garde la couleur violette/bleue originale
      library: 'url(#hue-brown)',
      office: 'url(#hue-orange)',
      cafeteria: 'url(#hue-pink)',
    };
    
    return filters[building.type] || '';
  };

  return (
    <svg
      width="1200"
      height="800"
      viewBox="0 0 1200 800"
      className="absolute inset-0"
      style={{ pointerEvents: 'auto' }}
    >
      
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" opacity="0.1" />
        </pattern>
        
        {/* Jaune/doré - Entrance */}
        <filter id="hue-yellow" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="50" />
          <feColorMatrix type="saturate" values="1.5" />
        </filter>
        
        {/* Rouge brique - Classroom */}
        <filter id="hue-red" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="-80" />
          <feColorMatrix type="saturate" values="1.3" />
        </filter>
        
        {/* Marron/bois - Library */}
        <filter id="hue-brown" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="-50" />
          <feColorMatrix type="saturate" values="0.6" />
        </filter>
        
        {/* Orange vif - Office */}
        <filter id="hue-orange" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="-60" />
          <feColorMatrix type="saturate" values="2" />
          <feColorMatrix type="matrix" values="
            1 0 0 0 0.1
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0
          "/>
        </filter>
        
        {/* Rose/magenta - Cafeteria */}
        <filter id="hue-pink" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="30" />
          <feColorMatrix type="saturate" values="1.4" />
        </filter>
        
        {/* Vert - Libéré */}
        <filter id="hue-liberated" colorInterpolationFilters="sRGB">
          <feColorMatrix type="hueRotate" values="100" />
          <feColorMatrix type="saturate" values="1.5" />
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1.2 0 0 0.1
            0 0 1 0 0
            0 0 0 1 0
          "/>
        </filter>
      </defs>
      
      
      <rect x="0" y="0" width="1200" height="800" fill="#fef3c7" />
      <rect x="0" y="0" width="1200" height="800" fill="url(#grid)" />
      
      
      <g stroke="#000" strokeWidth="8" fill="none" strokeLinecap="square">
        <path d="M 600 650 L 600 520 L 600 400" />
        <path d="M 600 400 L 300 400" />
        <path d="M 600 400 L 800 400" />
        <path d="M 300 400 L 300 175" />
        <path d="M 300 175 L 500 175" />
        <path d="M 500 175 L 800 175" />
      </g>
      
      
      <g stroke="#fff" strokeWidth="20" fill="none" strokeLinecap="square">
        <path d="M 600 650 L 600 520 L 600 400" />
        <path d="M 600 400 L 300 400" />
        <path d="M 600 400 L 800 400" />
        <path d="M 300 400 L 300 175" />
        <path d="M 300 175 L 500 175" />
        <path d="M 500 175 L 800 175" />
      </g>
      
      
      
        {[
          { x: 50, y: 50, hasSnake: false },
        { x: 1100, y: 50, hasSnake: false },
        { x: 50, y: 700, hasSnake: true },
        { x: 1100, y: 700, hasSnake: false },
        { x: 550, y: 280, hasSnake: false },
        { x: 950, y: 550, hasSnake: false },
        { x: 50, y: 550, hasSnake: false },
      ].map((tree, i) => (
        tree.hasSnake ? (
          <HiddenSnake key={i} x={tree.x} y={tree.y} />
        ) : (
          <image
            key={i}
            href={treeImage}
            x={tree.x - 40}
            y={tree.y - 50}
            width="80"
            height="100"
            preserveAspectRatio="xMidYMid meet"
          />
        )
      ))}
     
      
      
      {buildings.map((building) => {
        const isLiberated = liberatedBuildings.includes(building.id);
        const filter = getBuildingFilter(building, isLiberated);
        
        return (
          <g 
            key={building.id} 
            className="cursor-pointer transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            onClick={() => onBuildingClick?.(building)}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Ombre du bâtiment */}
            <rect
              x={building.x + 6}
              y={building.y + 6}
              width={building.width}
              height={building.height}
              fill="rgba(0,0,0,0.3)"
            />
            
            {/* Image du bâtiment avec filtre de couleur */}
            <image
              href={buildingImage}
              x={building.x}
              y={building.y}
              width={building.width}
              height={building.height}
              preserveAspectRatio="xMidYMid slice"
              filter={filter}
            />
            
            {/* Étiquette du nom */}
            <g>
              <rect
                x={building.x + building.width / 2 - 60}
                y={building.y + building.height + 8}
                width="120"
                height="24"
                fill="#fef08a"
                stroke="#000"
                strokeWidth="2"
              />
              <text
                x={building.x + building.width / 2}
                y={building.y + building.height + 24}
                textAnchor="middle"
                fill="#000"
                fontSize="12"
                fontFamily="monospace"
                fontWeight="bold"
                style={{ textTransform: 'uppercase' }}
              >
                {building.name}
              </text>
            </g>
            
            {/* Badge libéré */}
            {isLiberated && (
              <g transform={`translate(${building.x + building.width - 20}, ${building.y - 10})`}>
                <rect x="-11" y="-11" width="26" height="26" fill="#000" />
                <rect x="-13" y="-13" width="26" height="26" fill="#22c55e" stroke="#000" strokeWidth="3" />
                <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold">✓</text>
              </g>
            )}
          </g>
        );
      })}
      
      
      <g transform="translate(600, 50)">
        
        <rect x="-196" y="-16" width="400" height="44" fill="#000" />
        
        <rect x="-200" y="-20" width="400" height="44" fill="#a3e635" stroke="#000" strokeWidth="4" />
        <text x="0" y="10" textAnchor="middle" fill="#000" fontSize="20" fontFamily="monospace" fontWeight="bold" style={{ textTransform: 'uppercase' }}>
          🏫 LYCÉE DU VILLAGE N.I.R.D 🏫
        </text>
      </g>
    </svg>
  );
}
