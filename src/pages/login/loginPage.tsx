import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password
    }

    var result = await signIn(data);

    if (result){
      navigate('/home');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

        <button type="submit">Entrar</button>
      </form>
    </>
  )
}

export default LoginPage;