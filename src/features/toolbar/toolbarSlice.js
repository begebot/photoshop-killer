import { createSlice } from '@reduxjs/toolkit';

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState: {
    selected: ''
  },
  reducers: {
    select: (state, action) => {
        state.selected = action.payload;
    }
  },
});

export const { select } = toolbarSlice.actions;

export const selectedToolId = state => state.toolbar.selected;

export default toolbarSlice.reducer;
