import { Redirect, Route, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

// hasRole: role es 'admin' 
export default function PrivateRoute( {hasRole: role, ...props} ) {
    const location = useLocation()
    const { hasRole, isLogged } = useAuth()

    //si existe rol, pasa a evaluar con hasRole de useAuth()
    if(role && !hasRole(role)) return <Redirect to={routes.home} />

    // enviar la ruta como state al loginpage
    if(!isLogged()) return <Redirect to={{pathname: routes.login, state: {from: location}}} />

    return (
        <Route { ...props }/>
    )
}
