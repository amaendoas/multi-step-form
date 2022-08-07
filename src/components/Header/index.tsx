import * as C from "./styles"
import logoImg from "../../assets/logo.svg"
import { Button } from "../Button"
import { useNavigate } from "react-router"

export function Header() {
  const navigate = useNavigate()

  function handleSearch() {
    navigate("/search")
  }
  return (
    <C.Container>
      <img src={logoImg} alt="" />
      <Button
      title="Search a quote"
      onClick={handleSearch}
      />
    </C.Container>
  )
}