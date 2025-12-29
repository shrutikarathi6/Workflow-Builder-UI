import React,{ useState } from 'react';

const Node = ({ data, onAddNode }) => {
    const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectAction = (type) => {
    onAddNode(data.id, type);
    setIsOpen(false); 
  };
  return (
    <div>
    <div className="node-container">
     
      <div className={`node-card ${data.type}`}>
        <div className="node-type-label">{data.type.toUpperCase()}</div>
        <div className="node-label">{data.label}</div>
        
       
     {data.type !== 'end' && data.type !== 'branch' && (
          <div className="add-node-dropdown">
            <button className="add-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '+' : '+'}
            </button>
            {isOpen && (
              <div className="dropdown-content">
                <button onClick={() => { onAddNode(data.id, 'action'); setIsOpen(false); }}>Add Action</button>
                <button onClick={() => { onAddNode(data.id, 'branch'); setIsOpen(false); }}>Add Branch</button>
                <button onClick={() => { onAddNode(data.id, 'end'); setIsOpen(false); }}>Add End</button>
              </div>
            )}
          </div>
        )}
      </div>

  
      {data.children && data.children.length > 0 && (
        <div className={`children-container ${data.type === 'branch' ? 'branch-layout' : ''}`}>
          {data.children.map((child) => (
            <div key={child.id} className={data.type==='branch' ? `child-wrapper` : `child`}>
              <div className="connector-line"></div>
             
              <Node data={child} onAddNode={onAddNode} />
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Node;