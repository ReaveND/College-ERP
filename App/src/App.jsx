import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<h1 className="text-center text-red-500">404: Page Not Found</h1>} />
        <Route path="/" element={<Admin />}>
          {/* <Route index element={<Navigate to="dashboard" replace />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
