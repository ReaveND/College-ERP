import React from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const FacultyProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/FacultyLogin" />;

  try {
    const user = jwtDecode(token);
    return user.role === 'faculty' ? children : <Navigate to="/unauthorized" />;
  } catch (err) {
    console.error('Invalid token:', err);
    return <Navigate to="/FacultyLogin" />;
  }
};

export default FacultyProtectedRoute;
