import React, { useState, useEffect } from "react";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Load from './pages/load/Load';
import NotFound from './pages/notfound';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  }, []);
  
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/admin" element={<App />}/> */}
          {/* <Route path="/candidato"  element={<App />}/> */}
          {/* <Route path="/" element={<Login />}/> */}
          <Route exact path="/" element={loading == true ? (<Load />) : (<Login />)} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
