import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './contexts/authContext'
import { router } from './routes'

function App() {

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  )
}

export default App
