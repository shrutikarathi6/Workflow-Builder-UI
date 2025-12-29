
const nodeStyles = {
  Start: { background: '#4caf50', color: 'white' },
  Action: { background: '#2196f3', color: 'white' },
  Branch: { background: '#ff9800', color: 'white' },
  End: { background: '#f44336', color: 'white' },
};

const typeLabels = {
  Start: 'START',
  Action: 'ACTION',
  Branch: 'BRANCH',
  End: 'END',
};

export default function Node({ node, level = 0 }) {
  const style = nodeStyles[node.type] || nodeStyles.Action;

  return (
    <div className="node-branch">
      <div
        className="node"
        style={{
          ...style,
          marginLeft: `${level * 60}px`,  // Increased indentation for better tree feel
          padding: '16px 24px',
          borderRadius: '12px',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '140px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '6px' }}>
          {typeLabels[node.type]}
        </div>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          {node.label}
        </div>
      </div>

      {node.children.length > 0 && (
        <div className="children">
          {node.children.map((child) => (
            <div key={child.id} className="child-wrapper">
              <div className="connector-line" />
              <Node node={child} level={level + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}