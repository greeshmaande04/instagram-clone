import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <h1>404</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="back-link">
      Back to Home
    </Link>
  </div>
)

export default NotFound