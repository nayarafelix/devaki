import {Container, Button, Image, Bio} from "./Yuri.styles.ts";

const Yuri = () => {
  return (
      <Container>
        <Image src="/profile/yuri.png" alt="Yuri Cunha"/>
        <h2>Yuri Cunha</h2>
        <Bio>Sou Yuri, um entusiasta apaixonado por desenvolvimento de software, resido em Volta Redonda, Rio de Janeiro. Formado em Tecnologia da Informação e atualmente cursando um MBA em Ciência da Computação pela FIAP, trago mais de 4 anos de experiência como desenvolvedor de software, com especialização em tecnologias como Node.js, React, C#, e Java.</Bio>

        <p>Contato: </p>
        <a href="https://www.linkedin.com/in/yuriscunha/" target="_blank">Linkedin</a>

        <Button href="/frelancers">Voltar</Button>
      </Container>
  )
}

export {Yuri}
