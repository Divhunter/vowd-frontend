import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App"

// styles
import './styles/index.css'
import './styles/Normalize.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Router>
			<App />
        </Router>
    </React.StrictMode>
)
