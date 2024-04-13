import React from 'react';
import './ticket.css';
function TicketDetailsTab() {
  return (
    <div id='gg'>
       <div className="tab">
      <h2>Ticket Details</h2>
      <div className="detail-item">
        <label>Issue Description:</label>
        <textarea rows="4"></textarea>
      </div>
      <div className="detail-item">
        <label>Priority Selection:</label>
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
      <div className="detail-item">
        <label>Category Selection:</label>
        <select>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </div>
      <div className="detail-item">
        <label>Attachments:</label>
        <input type="file" multiple />
      </div>
    </div>
    </div>
   
  );
}

export default TicketDetailsTab;
