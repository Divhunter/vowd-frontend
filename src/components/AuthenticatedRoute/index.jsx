import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../contexts/Auth'
import Website from '../../pages/Website'

const AuthenticatedRoute = ({ path, component }) => {
    
    const { isAuthenticated } = useContext(Auth)

    return isAuthenticated ? (
        <Routes>
            <Route exact path={path} component={component} />
        </Routes>
    ) : (
        <Routes>
            <Route exact path='/vowd' element={ <Website /> } />
        </Routes>
    )
}

export default AuthenticatedRoute