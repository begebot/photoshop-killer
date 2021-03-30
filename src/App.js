import React from 'react';
import Toolbar from './features/toolbar/Toolbar';
import WorkingArea from './features/workingArea/WorkingArea';
import './App.css';
import { TOOLBAR } from './config';

function App() {
  return (
    <div className="App">
      <Toolbar {...TOOLBAR} />
      <WorkingArea />
    </div>
  );
}

export default App;
