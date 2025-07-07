import React from 'react';
import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <button onClick={handleLogout} className="text-white bg-red-600 px-3 py-1 rounded ml-4">
      Logout
    </button>
  );
};

export default LogoutButton;