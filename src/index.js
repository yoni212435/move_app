import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import {AuthProvider} from './contexts/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div className="">
        <React.StrictMode>
            <Router>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </Router>
        </React.StrictMode>
    </div>
)