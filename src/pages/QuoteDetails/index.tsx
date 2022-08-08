import { Back } from "../../components/Back"
import { Status } from "../../components/Status"
import { Theme } from "../../components/Theme"
import { ButtonSecondary } from "../../components/ButtonSecondary"
import { useNavigate } from "react-router"
import * as C from "./styles"

export function QuoteDetails() {
  const navigate = useNavigate()
  function handleCLick() {
    navigate("/")
  }
  return (
      <Theme>
        <C.Container>
          <Back
          title="back"
          path="/search"
          />
          <h1>Project Name</h1>
          <C.Info>
            <C.Header>
            <Status
              title="Processing"
              finished={false}
              />
            <ButtonSecondary
            title="Edit quote"
            onClick={handleCLick}
            />
            </C.Header>
            <C.Content>
              <C.Data>
                <h4>Date of request: </h4>
                <span>07/08/2022 at 6pm</span>
              </C.Data>
              <C.Data>
                <h4>Requested by:</h4>
                  <span> Amanda Guerra, </span>
                  <span>(xx)-xxxxx-2243, </span>
                  <span>xxxxxxxxnda1@hotmail.com</span>
              </C.Data>
              <C.Data>
                <h4>Service: </h4>
                <span>Web Design</span>
              </C.Data>
              <C.Data>
                <h4>Budget: </h4>
                <span>less than $5.000</span>
              </C.Data>
              <C.Data>
                <h4>Description:</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra lacus, consectetur tempor viverra auctor. Habitasse adipiscing fermentum at at odio ut ornare egestas. Est condimentum tincidunt quis nec, rhoncus, egestas sem feugiat dolor. Dignissim odio quisque elit quam. Id senectus platea leo tortor ultrices sem diam vitae aliquet. Nunc at sit donec eu. Ullamcorper elit sem elementum pellentesque pellentesque etiam. Blandit facilisis duis nunc dui. Magna in tellus lacus nisl id.</p>
              </C.Data>
            </C.Content>
            </C.Info>
        </C.Container>
      </Theme>
  )
}