import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App todos={[{ id: 1, text: 'Start from here', isCompleted: false }]} />
)

