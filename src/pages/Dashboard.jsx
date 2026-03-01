import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const { userEmail, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const handleGoToApp = () => {
    navigate('/welcome')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
