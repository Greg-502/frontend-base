import { useState } from 'react'
import { createContext } from 'react'
import { useHistory } from 'react-router-dom'
import roles from '../helpers/roles'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const history = useHistory()
    const [user, setUser] = useState(null)
    // const [user, setUser] = useState(null)

    const login = (userCredentials, fromLocation) => {
        setUser({id:1, role:roles.regular})
        
        // volver a la ruta anterior
        fromLocation &&
            history.push(fromLocation)
    }

    const logout = () => setUser(null)

    //para no eviar el usuario completo a todos lados
    const isLogged = () => !!user //retorna si el usuario existe o no
    const hasRole = (role) => user?.role === role // si el rol del usuario es igual a (role admin) traido

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }

    return <AuthContext.Provider value = {contextValue}>
            { children }
        </AuthContext.Provider>
}
