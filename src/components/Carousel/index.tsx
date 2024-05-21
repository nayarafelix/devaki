import { CarouselContainer, List } from "./Carousel.styles.ts";

const Carousel = () => {
  return (
      <CarouselContainer>
        <h2>Tecnologias</h2>
        <List>
          <li>
            <img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" />
          </li>
          <li>
            <img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" />
          </li>
          <li>
            <img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" />
          </li>
          <li>
            <img width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" />
          </li>
        </List>
      </CarouselContainer>
  )
}

export { Carousel }
