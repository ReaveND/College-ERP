import React from "react";
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/admin-login" />;

  try {
    const user = jwtDecode(token);
    return user.role === 'admin' ? children : <Navigate to="/unauthorized" />;
  } catch (err) {
    console.error('Invalid token:', err);
    return <Navigate to="/admin-login" />;
  }
};

export default AdminProtectedRoute;