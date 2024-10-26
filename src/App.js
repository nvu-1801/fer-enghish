// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homelayout';
// import UserManagement from './pages/UserManagement';
// import ClassManagement from './pages/ClassManagement';
// import AttendanceTracking from './pages/AttendanceTracking';
// import SalaryAndFee from './pages/SalaryAndFee';
// import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/user-management" element={<UserManagement />} />
        <Route path="/class-management" element={<ClassManagement />} />
        <Route path="/attendance-tracking" element={<AttendanceTracking />} />
        <Route path="/salary-and-fee" element={<SalaryAndFee />} />
        <Route path="/help" element={<Help />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
