// src/App.jsx
import { useState } from 'react';
import { initialWorkflow } from './data/initialWorkflow';
import './index.css';

function App() {
  const [workflow, setWorkflow] = useState(initialWorkflow);

  return (
    <div className="app">
      <header className="header">
        <h1>Workflow Builder</h1>
      </header>
      <div className="canvas">
        <pre>{JSON.stringify(workflow, null, 2)}</pre>
  
      </div>
    </div>
  );
}

export default App;