import React from 'react';

const LABELS = {
    type: 'Figure type',
    radius: 'Radius',
    x: 'Position by X',
    y: 'Position by Y',
    width: 'Width',
    height: 'Height',
    rotate: 'Rotation (deg)',
    color: 'Color'
}

const FigureInfo = ({ figure }) => (
    <dl>
        {
            Object.keys(LABELS).map(key => {
                if (key in figure) {
                    return (
                        <>
                            <dd key={`dd-${key}`}>{LABELS[key]}</dd>
                            <dt key={`dt-${key}`}>{figure[key]}</dt>
                        </>
                    )
                }
            })
        }
    </dl>
)

export default FigureInfo;
