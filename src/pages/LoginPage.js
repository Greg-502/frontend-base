import { useLocation } from "react-router-dom"
import useAuth from "../auth/useAuth"

const userCredentials = {}

export default function LoginPage() {
    const location = useLocation()
    const { login } = useAuth()

    return (
        <div>
            <h1>Login</h1>

            {/* leer el state, para hacer la re direccion */}
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar sesión</button>
        </div>
    )
}
