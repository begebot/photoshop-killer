import React from 'react';

const LABELS = {
    type: 'Тип',
    radius: 'Радиус',
    x: 'Позиция по X',
    y: 'Позиция по Y',
    width: 'Ширина',
    height: 'Высота',
    rotate: 'Поворот',
    color: 'Цвет'
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
