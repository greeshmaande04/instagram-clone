import {Link, useNavigate} from 'react-router-dom'

import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem('jwt_token')
    navigate('/login')
  }

  return (
    <nav className="nav-header">
      <div className="brand-group">
        <Link to="/" className="logo">
          Instagram
        </Link>
        <span className="brand-tag">Clone</span>
      </div>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input type="search" placeholder="Search" className="search-input" />
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/my-profile" className="nav-link">
            Profile
          </Link>
        </li>

        <li>
          <button type="button" className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header