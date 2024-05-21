import { useNavigate } from "react-router-dom";

import { HeaderContainer, Button } from './Header.styles'

const Header = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }

  return (
    <HeaderContainer>
      <a href="/">
        <img src="/logo.png" width="100" alt="Logo - DevAki"/>
      </a>
      <Button onClick={handleLogin}>Entrar</Button>
    </HeaderContainer>
  )
}

export { Header }
