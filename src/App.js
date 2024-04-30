import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ImageUpload from './imgupload';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToxicityChecker from './txtupload';
import Home from './home';
import Contact from './contact';
import NestedDragAndDropExample from './dndtest';
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <NestedDragAndDropExample />
    </DndProvider>
  );
};
export default App;