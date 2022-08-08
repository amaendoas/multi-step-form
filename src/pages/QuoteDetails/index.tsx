import { Back } from "../../components/Back"
import { Status } from "../../components/Status"
import { Theme } from "../../components/Theme"
import { ButtonSecondary } from "../../components/ButtonSecondary"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

export function QuoteDetails() {
  const [data, setData] = useState<any>(null)
  const params = useParams()
  const navigate = useNavigate()
  function handleCLick() {
    navigate("/")
  }
  useEffect(() => {
    async function getQuote() {
      const response = await api.get(`/quotes/${params.id}`)
      setData(response.data)
    }
    getQuote()
  }, [])
  return (
      <Theme>
        <C.Container>
          <Back
          title="back"
          path="/quotes"
          />
          { data && 
          <C.Quote>
            <h1>{data.projectName}</h1>
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
                  <span>{data.createdAt}</span>
                </C.Data>
                <C.Data>
                  <h4>Requested by: </h4>
                    <span>{data.name}, </span>
                    <span>{data.phone}, </span>
                    <span>{data.email}</span>
                </C.Data>
                <C.Data>
                  <h4>Service: </h4>
                  <span>{data.service}</span>
                </C.Data>
                <C.Data>
                  <h4>Budget: </h4>
                  <span>{data.budget}</span>
                </C.Data>
                <C.Data>
                  <h4>Description:</h4>
                  <p>{data.projectDescription}</p>
                </C.Data>
              </C.Content>
              </C.Info> 
            </C.Quote>
            }
        </C.Container>
      </Theme>
  )
}