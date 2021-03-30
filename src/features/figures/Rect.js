import React from 'react';

const Rect = ({ width, height, color, selected }) => (
    <svg viewBox={`0 0 100 100`} version="1.1"
        style={{
            width: `${width}px`,
            height: `${height}px`
        }}
        xmlns="http://www.w3.org/2000/svg">
        <rect
            x={10}
            y={10}
            width={80}
            height={80}
            fill={color || 'black'}
            stroke={ selected ? 'DarkCyan' : ''}
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
)

export default Rect;
