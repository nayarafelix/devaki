import { useNavigate } from 'react-router-dom'

import { Carousel } from '../../components/Carousel'

import { HomeContainer, Button, Title } from './Home.styles'

const Home = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/frelancers')
  }

  return (
      <HomeContainer>
        <Title>Encontre o melhor freelancer para o seu projeto</Title>

        <Button onClick={handleButtonClick}>Encontrar freelancer</Button>

        <Carousel/>
      </HomeContainer>
  )
}

export {Home}
