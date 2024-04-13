import React from 'react';

function AssignmentTab() {
  return (
    <div id='gg'>
      <div className="tab">
      <h2>Assignment</h2>
      <div className="detail-item">
        <label>Assignee Selection:</label>
        <input type="text" />
      </div>
      <div className="detail-item">
        <label>Due Date:</label>
        <input type="date" />
      </div>
    </div>
    </div>
    
  );
}

export default AssignmentTab;
