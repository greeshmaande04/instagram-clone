import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const onSubmitForm = event => {
    event.preventDefault()

    if (username === 'rahul' && password === 'rahul@2021') {
      localStorage.setItem('jwt_token', 'sample_token')
      navigate('/')
    } else {
      setErrorMessage('Invalid username or password. Try rahul / rahul@2021.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="brand">
          <span className="logo">Instagram</span>
          <span className="tag">Clone</span>
        </div>
        <p className="subtitle">Log in to see photos and videos from your friends.</p>

        <form className="form-container" onSubmit={onSubmitForm}>
          <label className="label">USERNAME</label>
          <input
            type="text"
            className="input"
            placeholder="rahul"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label className="label">PASSWORD</label>
          <input
            type="password"
            className="input"
            placeholder="rahul@2021"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm