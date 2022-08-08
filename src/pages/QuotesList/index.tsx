import * as C from "./styles"
import { Back } from "../../components/Back"
import { Details } from "../../components/Details"
import { Theme } from "../../components/Theme"
import { Status } from "../../components/Status"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ButtonSecondary } from "../../components/ButtonSecondary"
import { useNavigate } from "react-router"
import { Quote } from "../QuoteDetails/styles"

export function QuotesList() {
  const navigate = useNavigate()
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    async function getQuotes() {
      const response = await api.get("/quotes")
      setQuotes(response.data)
    }
    getQuotes()
  }, [])

  return (
    <Theme>
      <C.Container>
        <Back
        title="back to home"
        path="/"
        />
        <C.Title>
          <h1>Quotes list</h1>
          <ButtonSecondary
          title="Get a new quote"
          onClick={() => navigate("/step1")}
          />
        </C.Title>
        <ul>

          { quotes.length ?
            quotes.map((quote: any) => {
              return(
                <li key={quote.id}>
                  <Details
                  title={quote.projectName}
                  button="See the details"
                  description={quote.projectDescription}
                  path={`/details/${quote.id}`}
                  >
                  <Status
                  title="Processing"
                  finished={false}
                  />
                  <span>Requested by
                    <strong> {quote.name},</strong> em: {quote.createdAt} 
                  </span>
                  </Details>  
                </li>
              )
            }) :
            <C.Empty>
              <p>You don't have a quote request yet!</p>
              <ButtonSecondary
              title="Get a new quote"
              onClick={() => {navigate("/step1")}}
              />
            </C.Empty>
          }
        </ul>
      </C.Container>
    </Theme>
  )
}