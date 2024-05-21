import { Container, Button, Image, Bio } from "./Vinicius.styles";

const Vinicius = () => {
  return (
      <Container>
        <Image src="/profile/vinicius.png" alt="Vinicius S. Lima"/>
        <h2>Vinicius S. Lima</h2>
        <Bio>Atuo como Desenvolvedor IOS desde 2015, formado em Ciência da computação e atualmente faço MBA em
          desenvolvimento Mobile</Bio>

        <p>Contato: </p>
        <a href="https://www.linkedin.com/in/vnmontanhavn/" target="_blank">Linkedin</a>

        <Button href="/frelancers">Voltar</Button>
      </Container>
  )
}

export {Vinicius}
