
export const generateId = () => Math.random().toString(36).substr(2, 9);

export const createNode = (type, label = 'New Step') => {
  const node = {
    id: generateId(),
    type, 
    label,
    children: []
  };

 if (type === 'branch') {
  
    node.children = [
      { id: generateId(), type: 'action', label: 'True Path', children: [], branchType: 'true' },
      { id: generateId(), type: 'action', label: 'False Path', children: [], branchType: 'false' }
    ];
  }
  
  return node;
};

export const initialWorkflow = {
  id: 'root',
  type: 'start',
  label: 'Start',
  children: []
};