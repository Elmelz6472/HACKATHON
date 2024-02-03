import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import OptionsButton from './Components/OptionsButton/OptionsButton';
import DataPanel from './Components/Panel/DataPanel';
import Playground from './Components/Playground/Playground';

const App = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DataPanel />
        <Playground />
      </DndProvider>
      <OptionsButton />
    </div>
  );
};

export default App;