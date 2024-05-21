import { Router } from './routes/index.routes.tsx'
import GlobalStyle from "./styles";

const App = () => {
  return (
      <>
        <GlobalStyle />
        <Router />
      </>
  )
}

export { App }
