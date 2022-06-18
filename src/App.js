import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Logout } from "./pages";
export default function App() {
  const { isLogin } = useSelector(state => state.user);

  return (
    <div>
      <Routes>
        <Route path='/' element={isLogin ? <Home /> : <Navigate to="/login" replace={true} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}
