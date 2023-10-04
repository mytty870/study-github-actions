import React, { useState } from 'react';
import './App.css';

function App() {

  const [count ,setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p data-testid="count">{count}</p>
        <button type="button" data-testid="count-up-button" onClick={() => setCount(count + 1)}>Count Up</button>
      </header>
    </div>
  );
}

export default App;
