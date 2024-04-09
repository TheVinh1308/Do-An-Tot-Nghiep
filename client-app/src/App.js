import React from 'react';
import PublicRouter from './Routes/PublicRouter';
import PrivateRouter from './Routes/PrivateRouter';
function App() {

  return (
    <>

        <PublicRouter/>
        <PrivateRouter/>
    </>
  );
}

export default App;
