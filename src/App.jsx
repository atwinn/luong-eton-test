import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import 'antd/dist/reset.css';
import Login from './page/login';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
