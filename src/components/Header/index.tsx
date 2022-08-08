import * as C from "./styles"
import logoImg from "../../assets/logo.svg"
import { Button } from "../Button"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export function Header() {
  const navigate = useNavigate()

  function handleSearch() {
    navigate("/quotes")
  }
  return (
    <C.Container>
      <Link to="/">
      <img src={logoImg} alt="logo"/>
      </Link>
      <Button
      title="Search a quote"
      onClick={handleSearch}
      />
    </C.Container>
  )
}