import { addFigure, selectFigure, rotateFigure, updatePosition, deleteFigure } from './features/workingArea/workingAreaSlice';
import Circle from './features/figures/Cirle';
import Triangle from './features/figures/Triangle';
import Rect from './features/figures/Rect';

const CIRCLE = 'circle'
const TRIANGLE = 'triangle'
const RECT = 'rect'
const ADD = 'add';
const SELECT = 'select';
const DELETE = 'delete';
export const MOVE = 'move';
const ROTATE = 'rotate';

export const FIGURES = {
    [CIRCLE]: {
        Component: Circle,
        params: {
            type: CIRCLE,
            radius: 40,
            color: '#f33'
        }
    },
    [RECT]: {
        Component: Rect,
        params: {
            type: RECT,
            width: 100,
            height: 100,
            color: '#33f'
        }
    },
    [TRIANGLE]: {
        Component: Triangle,
        params: {
            type: TRIANGLE,
            width: 100,
            height: 100,
            color: '#3f3'
        }
    }
}

// Dictionary for all available tools
export const TOOLS = {
    [SELECT]: {
        action: selectFigure
    },
    [MOVE]: {
        actionStop: updatePosition
    },
    [DELETE]: {
        action: deleteFigure
    },
    [`${ROTATE}-cw`]: {
        action: rotateFigure,
        params: {
            rotate: 45
        }
    },
    [`${ROTATE}-ccw`]: {
        action: rotateFigure,
        params: {
            rotate: -45
        }
    },
    [`${ADD}-${CIRCLE}`]: {
        action: addFigure,
        params: FIGURES[CIRCLE].params
    },
    [`${ADD}-${CIRCLE}-small`]: {
        action: addFigure,
        params: {
            ...FIGURES[CIRCLE].params,
            radius: 30,
            color: '#999'
        }
    },
    [`${ADD}-${RECT}`]: {
        action: addFigure,
        params: FIGURES[RECT].params
    },
    [`${ADD}-${TRIANGLE}`]: {
        action: addFigure,
        params: FIGURES[TRIANGLE].params
    }
};

export const TOOLBAR = {
    sections: [
        [
            SELECT, 
            MOVE, 
            DELETE, 
            `${ROTATE}-cw`,
            `${ROTATE}-ccw`
        ],
        [ 
            `${ADD}-${CIRCLE}`,
            `${ADD}-${CIRCLE}-small`,
            `${ADD}-${RECT}`,
            `${ADD}-${TRIANGLE}`
        ]
    ]
}