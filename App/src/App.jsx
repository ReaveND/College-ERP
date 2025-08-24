import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import User from './components/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1 className="text-center text-red-500">404: Page Not Found</h1>} />
        <Route path="/" element={<Admin />}>
          {/* <Route index element={<Navigate to="dashboard" replace />} /> */}
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="User" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
