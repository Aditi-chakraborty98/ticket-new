import React from 'react';
import TicketDetailsTab from './component/TicketDetailsTab';
import AssignmentTab from './component/AssignmentTab';
import StatusTab from './component/StatusTab';
import ResolutionTab from './component/ResolutionTab';
import SearchFilterTab from './component/SearchFilterTab';
import HistoryTab from './component/HistoryTab';
import NotificationTab from './component/NotificationTab';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <Router>
      <div class="parent">
        
        <div  class="child">
            <Link to="/TicketDetailsTab">TicketDetails</Link>
            <Link to="/assignmentTab">Assignment</Link>
            <Link to="/statusTab">Status</Link>
            <Link to="/SearchFilterTab">SearchFilter</Link>
            <Link to="/HistoryTab">History</Link>
            <Link to="/NotificationTab">Notification</Link>
          </div>
    </div>

      <Routes>
        <Route path='/AssignmentTab' element={<AssignmentTab />} />
        <Route path='/StatusTab' element={<StatusTab />} />
        <Route path='/ResolutionTab' element={<ResolutionTab />} />
        <Route path='/SearchFilterTab' element={<SearchFilterTab />} />
        <Route path='/HistoryTab' element={<HistoryTab />} />
        <Route path='/TicketDetailsTab' element={<TicketDetailsTab />} />
        <Route path='/NotificationTab' element={<NotificationTab />} />
       
      </Routes>
    </Router>
  );
}

export default App;
