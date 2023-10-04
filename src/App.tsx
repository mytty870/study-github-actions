import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header'

function App() {

  const [count ,setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <main>
        <p data-testid="count">{count}</p>
        <button type="button" data-testid="count-up-button" onClick={() => setCount(count + 1)}>Count Up</button>
      </main>
    </div>
  );
}

export default App;
