import { createSlice } from '@reduxjs/toolkit';

const pseudoUID = () => 
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

export const workingAreaSlice = createSlice({
  name: 'workingArea',
  initialState: {
    figures: {

    },
    selected: ''
  },
  reducers: {
    addFigure: (state, { payload }) => {
      state.figures[`${payload.type}-${pseudoUID()}`] = payload;
    },
    selectFigure: (state, { payload }) => {
        state.selected = payload.curentFigure;
    },
    updatePosition: (state, { payload }) => {
        const { curentFigure, x, y } = payload;
        if (curentFigure) {
            state.figures[curentFigure].x = x || 0;
            state.figures[curentFigure].y = y || 0;
        }
    },
    deleteFigure: (state, { payload }) => {
        const { curentFigure } = payload;
        if (curentFigure) {
            delete state.figures[curentFigure];
            if (state.selected === curentFigure) {
                state.selected = '';
            }
        }
    },
    rotateFigure: (state, { payload }) => {
        const { curentFigure, rotate } = payload;
        if (curentFigure) {
            const currentRotate = state.figures[curentFigure].rotate || 0;
            state.figures[curentFigure].rotate = (currentRotate + rotate) % 360;
        }
    }
  },
});

export const { addFigure, selectFigure, rotateFigure, updatePosition, deleteFigure } = workingAreaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getFigures = state => state.workingArea.figures;
export const getSelectedFigure = state => state.workingArea.selected;

export default workingAreaSlice.reducer;
