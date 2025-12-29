import { useState } from 'react';
import { initialWorkflow } from './data/initialwork';
import Node from './components/Node';
import './index.css';

function App() {
  const [workflow, setWorkflow] = useState(initialWorkflow);

  return (
    <div className="app">
      <header className="header">
        <h1>Workflow Builder</h1>
      </header>
      <div className="canvas">
        <div className="workflow-tree">
          <Node node={workflow} />
        </div>
      </div>
    </div>
  );
}

export default App;