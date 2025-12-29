import React, { useState } from 'react';
import Node from './components/Node';
import { initialWorkflow, createNode } from './utils/workflow';

function App() {
  const [workflow, setWorkflow] = useState(initialWorkflow);

  const addNodeToFlow = (nodes, parentId, newNode) => {
    return nodes.map((node) => {
      if (node.id === parentId) {
        return { ...node, children: [...node.children, newNode] };
      }
      if (node.children.length > 0) {
        return { ...node, children: addNodeToFlow(node.children, parentId, newNode) };
      }
      return node;
    });
  };

  const handleAddNode = (parentId, type) => {
    const newNode = createNode(type);
    if (workflow.id === parentId) {
      setWorkflow({ ...workflow, children: [...workflow.children, newNode] });
    } else {
      const updatedChildren = addNodeToFlow(workflow.children, parentId, newNode);
      setWorkflow({ ...workflow, children: updatedChildren });
    }
  };

  return (
    <div className="workflow-canvas">
      <h1>Workflow Builder</h1>
      <Node data={workflow} onAddNode={handleAddNode} />
    </div>
  );
}

export default App;