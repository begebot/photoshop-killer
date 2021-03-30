import React from 'react';

const Triangle = ({ width, height, color, selected }) => (
    <svg viewBox={`0 0 ${width} ${height}`} version="1.1"
        style={{
            width: `${width}px`,
            height: `${height}px`
        }}
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 5L45 95L95 25Z"
            stroke={ selected? 'DarkCyan' : '' }
            strokeWidth="3"
            strokeLinecap="round"
            fill={ color || 'black' } />
    </svg>
)

export default Triangle;
