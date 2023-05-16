import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChangeThemeContext } from './context/ChangeThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChangeThemeContext>
      <App />
    </ChangeThemeContext>
  </React.StrictMode>,
)
