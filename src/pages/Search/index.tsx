import { Back } from "../../components/Back"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import {AiOutlineSearch} from "react-icons/ai"
import * as C from "./styles"
import { Details } from "../../components/Details"
import { Theme } from "../../components/Theme"
import { Status } from "../../components/Status"

export function Search() {

  function handleSearch() {
    console.log("pesquisando")
  }
  return (
    <Theme>
      <C.Container>
        <Back
        title="back to home"
        path="/"
        />
        <h1>Search quote</h1>
        <Input
        type="text"
        icon={AiOutlineSearch}
        placeholder="Enter your e-mail or phone number"
        value={undefined}
        onChange={handleSearch}
        />
        <Details
        title="Project Name"
        button="See the details"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar in diam, sollicitudin viverra odio..."
        path="/details"
        >
        <Status
        title="Processing"
        finished={false}
        />
        <span>Requested by <strong>Amanda Guerra,</strong> em: 08/07/2022
        </span>
        </Details>
      </C.Container>
    </Theme>
  )
}