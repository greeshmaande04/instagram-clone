import {Navigate} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = localStorage.getItem('jwt_token')

  if (token === null) {
    return <Navigate to="/login" />
  }

  return props.children
}

export default ProtectedRoute