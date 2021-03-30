import React from 'react';

const Circle = ({ radius, color, selected }) => (
    <svg viewBox={`0 0 100 100`} version="1.1"
        style={{
            width: `100px`,
            height: `100px`
        }}
        xmlns="http://www.w3.org/2000/svg">
        <circle
            cx={50}
            cy={50}
            r={radius}
            fill={color || 'black'}
            stroke={ selected ? 'DarkCyan' : ''}
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
)

export default Circle;
