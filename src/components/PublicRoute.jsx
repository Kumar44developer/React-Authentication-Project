import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'
import './ProtectedRoute.css'

function PublicRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="loading-container"
      >
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </motion.div>
    )
  }

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />
  }


  return children
}

export default PublicRoute
