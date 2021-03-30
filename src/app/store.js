import { configureStore } from '@reduxjs/toolkit';
import toolbarSlice from '../features/toolbar/toolbarSlice';
import workingAreaSlice from '../features/workingArea/workingAreaSlice';

export default configureStore({
  reducer: {
    toolbar: toolbarSlice,
    workingArea: workingAreaSlice,
  },
});
