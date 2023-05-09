import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../contexts/Auth'
import Website from '../../pages/Website'
import NewPass from './pages/NewPass'

const AuthenticatedRoute = ({ path, component }) => {
    
    const { isAuthenticated } = useContext(Auth)

    return isAuthenticated ? (
        <Routes>
            <Route exact path={path} component={component} />
        </Routes>
    ) : (
        <Routes>
            <Route exact path='/' element={ <Website /> } />
            <Route path='/password' element={ <NewPass /> } />  
        </Routes>
    )
}

export default AuthenticatedRoute