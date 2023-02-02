import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComp = () => {
    const auth = localStorage.getItem('authToken')
  return auth? <Outlet/>: <Navigate to="/login" />
}

export default PrivateComp
