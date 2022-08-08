import * as C from "./styles"
import warningImg from "../../assets/warning.svg"
import { Button } from "../Button"
import { ButtonOutline } from "../ButtonOutline"
import { useNavigate } from "react-router"

type Props = {
  children: any,
  title: string,
  description: string,
  trigger: boolean
}

export function PopUp({children, title,description, trigger}: Props) {
  const navigate = useNavigate()
  function handleClose() {

  }
  function handleSubmit() {
    navigate("/submitted")
  }
  return (trigger ? (
    <C.Container>
      <C.PopUp>
        <img src={warningImg} alt="warning" />
        <C.Content>
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
        <C.Buttons>
          <ButtonOutline
          title="Cancel"
          onClick={handleClose}
          />
          <Button
          title="Submit"
          onClick={handleSubmit}
          />
        </C.Buttons>
        </C.Content>
      </C.PopUp>
    </C.Container>
  ) : <C.Empty></C.Empty>)
}
