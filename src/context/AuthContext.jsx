import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail')
    const storedLoginState = localStorage.getItem('isLoggedIn')


  
    if (storedEmail && storedLoginState === 'true') {
      setUserEmail(storedEmail)
      setIsLoggedIn(true)
    }
    setLoading(false)
  }, [])            

  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userExists = users.find((u) => u.email === email)
    if (userExists) {
      return false 
    }

    const newUser = { email, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('userEmail', email)
    localStorage.setItem('isLoggedIn', 'true')
    return true 
  }
