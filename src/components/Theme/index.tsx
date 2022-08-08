import { Footer } from "../Footer"
import { Header } from "../Header"
import * as C from "./styles"
import { PopUp } from "../PopUp"

type Props = {
  children: any
}

export function Theme({children}: Props) {
  return (
    <C.Container>
      <Header/>
      <C.Main>
        {children}
      </C.Main>
      <Footer/>
    </C.Container>
  )
} 