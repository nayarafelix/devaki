import {Box, Image, ListContainer, Title} from "./List.styles"

const List = () => {
  return (
    <ListContainer>
      <Title>Frelancers</Title>

      <div>
        <Box href="/gustavo">
          <Image src="/profile/gustavo.png" alt="Gustavo Matias"/>
          <h2>Gustavo Matias</h2>
        </Box>

        <Box href="/nayara">
          <Image src="/profile/nayara.png" alt="Nayara Felix"/>
          <h2>Nayara Felix</h2>
        </Box>

        <Box href="/vinicius">
          <Image src="/profile/vinicius.png" alt="Vinicius S. Lima"/>
          <h2>Vinicius S. Lima</h2>
        </Box>

        <Box href="/yuri">
          <Image src="/profile/yuri.png" alt="Yuri Cunha"/>
          <h2>Yuri Cunha</h2>
        </Box>
      </div>
    </ListContainer>
  )
}

export {List}
