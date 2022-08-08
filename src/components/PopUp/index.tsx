import * as C from "./styles"
import { Button } from "../Button"
import { ButtonOutline } from "../ButtonOutline"
import { IoIosClose } from "react-icons/io"

type Props = {
  children: any,
  title: string,
  description: string,
  trigger: boolean,
  onClick: () => void,
  setTrigger: any,
  img: any,
  buttonTitle: string
}

export function PopUp({children, title,description, trigger, onClick, setTrigger, img, buttonTitle}: Props) {
  return (trigger ? (
    <C.Container>
      <C.PopUp>
        <button
        className="close"
        onClick={() => setTrigger(false)}
        ><IoIosClose/></button>
        <img src={img} alt="warning" />
        <C.Content>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
        <C.Buttons>
          <Button
          title={buttonTitle}
          onClick={onClick}
          />
        </C.Buttons>
        </C.Content>
      </C.PopUp>
    </C.Container>
  ) : <C.Empty></C.Empty>)
}
