import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './forms/RegisterForm' 
import LoginForm from './forms/LoginForm'
import Dashboard from './forms/Dashboard'

function App() {

  return (
    <>
       <div className="min-h-screen">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
       </div>
    </>
  )
}

export default App
