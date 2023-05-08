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
                    <Route exact path='/home/:userId' element={ <Wrapper /> } />
                    <Route exact path='/' element={ <Website /> } />
                    <Route exact path='/info' element={ <Info /> } />
                    <Route exact path='/*' element={ <Error /> } />
                    <Route exact path='/updatePassword/:userId' element={ <NewPass /> } />
                </Routes>
                <AuthenticatedRoute />
            </div>
            <ScrollToTop />
        </Auth.Provider>
    ) 
}

export default App