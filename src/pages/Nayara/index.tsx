import { Container, Button, Image, Bio } from "./Nayara.styles"

const Nayara = () => {
  return (
      <Container>
        <Image src="/profile/nayara.png" alt="Nayara Felix"/>
        <h2>Nayara Felix</h2>
        <Bio>Sou desenvolvedora front end há 5 anos, atuando no momento com React e com experiência na plataforma
          Magento 2 Adobe Commerce.

          Tenho habilidades em tecnologias web, incluindo HTML5, CSS3, LESS, jQuery e JavaScript. Também trabalhei com
          PHP, React, TypeScript, Styled Components, Storybook, ESlint e Apollo Client. Meu conhecimento é
          complementado pelas metodologias ágeis Scrum e Kanban para planejamento estratégico eficiente.

          Sou graduada em Sistemas para Internet pela FIAP e, atualmente, estou aprofundando meu conhecimento com um
          MBA em Desenvolvimento Mobile na mesma instituição.</Bio>

        <p>Contato: </p>
        <a href="https://linkedin.com/in/nayarafelix/" target="_blank">Linkedin</a>

        <Button href="/frelancers">Voltar</Button>
      </Container>
  )
}

export { Nayara }
