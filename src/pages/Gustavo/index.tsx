import { Container, Button, Image, Bio } from "./Gustavo.styles";

const Gustavo = () => {
  return (
      <Container>
        <Image src="/profile/gustavo.png" alt="Gustavo Matias"/>
        <h2>Gustavo Matias</h2>
        <Bio>Atuo na área de tecnologia da informação desde 2019, e como desenvolvedor front-end desde 2020, com foco em
          ReactJS. Atualmente faço MBA em desenvolvimento mobile.</Bio>

        <p>Contato: </p>
        <a href="https://www.linkedin.com/in/gustavomatias/" target="_blank">Linkedin</a>

        <Button href="/frelancers">Voltar</Button>
      </Container>
  )
}

export {Gustavo}
