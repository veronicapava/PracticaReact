import { useEffect, useState } from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';


// const defaultToDos = [
//   { text: 'Cut onion', completed: true, id: 1 },
//   { text: 'Study English', completed: false, id: 2 },
//   { text: 'Make breakfast', completed: true, id: 3 }
// ];


function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
