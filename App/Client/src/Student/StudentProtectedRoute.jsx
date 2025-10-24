import React from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const StudentProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/student-login" />;

  try {
    const user = jwtDecode(token);
    return user.role === 'student' ? children : <Navigate to="/unauthorized" />;
  } catch (err) {
    console.error('Invalid token:', err);
    return <Navigate to="/student-login" />;
  }
};

export default StudentProtectedRoute;