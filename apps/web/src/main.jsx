import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
