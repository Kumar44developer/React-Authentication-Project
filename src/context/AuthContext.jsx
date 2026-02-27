import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)
export function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null)
