// App.jsx

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-profile"
        element={
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        }
      />

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App