import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail')
    const storedLoginState = localStorage.getItem('isLoggedIn')
