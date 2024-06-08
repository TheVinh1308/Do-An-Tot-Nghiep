import React, { useEffect, useState } from 'react';
import PublicRouter from './Routes/PublicRouter';
import PrivateRouter from './Routes/PrivateRouter';
import { jwtDecode } from 'jwt-decode';
import Forbidden from './User/Pages/Forbidden';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const [role, setRole] = useState("");
  const [isTokenDecoded, setTokenDecoded] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
      setTokenDecoded(true);
    }
    else {
      setTokenDecoded(false)
    }
  }, []);

  if (role === "Admin" && isTokenDecoded) {
    return (
      <>
        <PrivateRouter />
        <PublicRouter />
      </>
    );
  } else if (window.location.pathname.startsWith("/admin")) {
  
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Forbidden />} />
          </Routes>
        </BrowserRouter>
      )
    
  }
  return (
    <div >
      <PublicRouter />
    </div>

  );
  
}

export default App;
