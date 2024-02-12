import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../services/api";


export function HomePage() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me').then(response => console.log(response.data))
  }, [])

  return (
    <>
      <h1>Home</h1>
      <h3>Email: {user?.name}</h3>
    </>
  )
}