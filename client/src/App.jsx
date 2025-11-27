import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import {Routes,Route, Navigate} from 'react-router'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import DefaultLayout from './components/DefaultLayout'
import RegisterPage from './components/RegisterPage';

function App() {

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App
