import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Draggable from 'react-draggable';
import classnames from 'classnames';

import { TOOLS, FIGURES, MOVE } from '../../config';
import {
  getFigures,
  getSelectedFigure
} from './workingAreaSlice';
import { selectedToolId } from '../toolbar/toolbarSlice';
import FigureInfo from './FigureInfo';
import styles from './WorkingArea.module.css';

export default function WorkingArea() {
  const figures = useSelector(getFigures);
  const selectedFigure = useSelector(getSelectedFigure);
  const areaRef = useRef();
  const dispatch = useDispatch();
  const activeTool = useSelector(selectedToolId);
  const [curentFigure, setCurrentFigure] = useState('');
  
  return (
    <div className={styles.area}
        ref={areaRef}
        onClick={(e) => {
            if (!activeTool || !TOOLS[activeTool].action) { return };
            const { offsetTop, offsetLeft } = areaRef.current;
            const { params, action } = TOOLS[activeTool];

            return dispatch(action({
                ...params,
                x: e.clientX - offsetLeft,
                y: e.clientY - offsetTop,
                curentFigure
        }))}}
    >
        { Object.keys(figures).map(key => 
            {
                const current = figures[key];
                const meta = FIGURES[current.type];
                const Component = meta && meta.Component;
                const figure = (
                    <div key={key}
                        className={classnames({
                            [styles.figure]: true,
                            // [styles.activeFigure]: selectedFigure === key
                        })}
                        onMouseEnter={() => setCurrentFigure(key)}
                        onMouseLeave={() => setCurrentFigure('')}
                        style={{
                            top: activeTool !== MOVE ? `${current.y}px` : '',
                            left: activeTool !== MOVE ? `${current.x}px` : '',
                            '--rotate': current.rotate ? `${current.rotate}deg` : ''
                        }}
                    >
                        {
                            Component ? <Component {...figures[key]} selected={selectedFigure === key} /> : JSON.stringify()
                        }
                    </div>
                );

                return (activeTool === MOVE) ?
                    <Draggable key={key} onStop={(_, data) => {
                        if (!activeTool || !TOOLS[activeTool].actionStop) { return };
                        const { actionStop } = TOOLS[activeTool];
                        return dispatch(actionStop({
                            x: data.x,
                            y: data.y,
                            curentFigure
                    }))}}
                        defaultPosition={{
                            x: current.x,
                            y: current.y
                        }}
                    >
                        <div>{figure}</div>
                    </Draggable>
                    : figure;
            }
        )}
        {selectedFigure && figures[selectedFigure] && <FigureInfo figure={figures[selectedFigure]} />}
    </div>
  );
}
