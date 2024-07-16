import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckLogin = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if (token !== null) {
      navigate("/"); // Redirect to home if token exists
    }
  }, [token, navigate]);

  return !token ? children : null; // Render children if not logged in
};

export default CheckLogin;
