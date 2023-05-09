import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import { hasAuthenticated } from './servicesApi/AuthApi'
import Auth from './contexts/Auth'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Website from './pages/Website'
import Wrapper from './pages/Wrapper'
import Info from './pages/Info'
import NewPass from './pages/NewPass'
import Error from './pages/Error'
import ScrollToTop from './functions/ScrollToTop'

// styles
import './styles/m-app.css'
import './styles/t-d-app.css'

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())
    
    return (
        <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <div>
                <Routes>
                    <Route path='/home/:userId' element={ <Wrapper /> } />
                    <Route path='/' element={ <Website /> } />
                    <Route path='/info' element={ <Info /> } />
                    <Route path='/*' element={ <Error /> } />
                    <Route path='/password' element={ <NewPass /> } />
                </Routes>
                <AuthenticatedRoute />
            </div>
            <ScrollToTop />
        </Auth.Provider>
    ) 
}

export default App