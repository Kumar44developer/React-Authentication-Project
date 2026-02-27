import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'
import './ProtectedRoute.css'

function PublicRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()
