import * as C from "./styles"
import { BsCircleFill } from "react-icons/bs"

type Props = {
  title: string;
  finished: boolean;
}

export function Status({title, finished}: Props) {
  return (
    <C.Container finished={finished}>
      <BsCircleFill/>
      <span>{title}</span>
    </C.Container>
  )
}