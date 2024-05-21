import { Outlet } from "react-router-dom"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Main } from "./Layout.styles";

const Layout = () => {
  return (
      <>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
  )
}

export { Layout }
