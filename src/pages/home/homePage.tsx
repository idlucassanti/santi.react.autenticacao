import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext";


export function HomePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      <h3>Email: {user?.email}</h3>
    </>
  )
}