import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import AuthProvider from './auth/AuthProvider'
import Layout from './components/layout/Layout'

function App() {
  return (
    // Router queda sobre AuthProvider para redirigir a la ruta anteior al hacer login
    // Hay acceso al router en el AuthProvider, 
    // AuthProvider envia info a los hijos
    <Router>
      <AuthProvider> 
        <Layout>
          <AppRouter/>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
