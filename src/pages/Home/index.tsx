import * as C from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import logoImg from "../../assets/logo.svg"
import { Details } from "../../components/Details"

export function Home() {
  return (
    <C.Container>
      <Header/>
        <C.Main>
          <img src={logoImg} alt="logo" />
          <p>Development and consulting company specialized in software development and maintenance, creative and personalized websites for small, medium and large companies.</p>
          <Details
          title="Get a project quote"
          button="Start the form"
          description={null}
          footer={null}
          path={"/step1"}
          />
        </C.Main>
      <Footer/>
    </C.Container>
  )
}