import './App.css';
import { useState, useEffect } from 'react';
import AppContext from './context/AppContext';
import Input from './components/input.js';
import List from './components/list.js';



function App() {
  const [items, setItems] = useState([]);
  console.log('App()');

  
  

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{ items, setItems }}>
          <Input />
          <List />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
