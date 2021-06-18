// hook que consume el contexto

import { useContext } from "react"
import { AuthContext } from '../auth/AuthProvider'

export default function useAuth() {
    // recibe el contextValue que envia el AuthProvider, y lo consume a traves de AuthContext
    return useContext(AuthContext)
}
