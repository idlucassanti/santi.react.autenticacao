import './App.css'
import { AuthContextProvider } from './contexts/AuthContext'
import LoginPage from './pages/login/loginPage'

function App() {

  return (
    <>
      <AuthContextProvider>
        <LoginPage />
      </AuthContextProvider>
    </>
  )
}

export default App
