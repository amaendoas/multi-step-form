import { Back } from "../../components/Back"
import { Status } from "../../components/Status"
import { Theme } from "../../components/Theme"
import { ButtonSecondary } from "../../components/ButtonSecondary"
import { useNavigate } from "react-router"
import { useParams } from "react-router"
import * as C from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { FormActions, useForm } from "../../contexts/FormContext"

export function QuoteDetails() {
  const [data, setData] = useState<any>(null)
  const { state, dispatch } = useForm()
  const params = useParams()
  const navigate = useNavigate()
  function handleEdit() {
      navigate(`/step1/${params.id}`)
  }

  async function handleDelete() {
    try {
      await api.delete(`/quotes/${params.id}`)
      navigate("/quotes")
    } catch(error: any) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível deletar")
      }
    }
  }

  useEffect(() => {
    async function getQuote() {
      const response = await api.get(`/quotes/${params.id}`)
      setData(response.data)
      dispatch({
        type: FormActions.setName,
        payload: response.data.name
      })

      dispatch({
        type: FormActions.setEmail,
        payload: response.data.email
      })
      
      dispatch({
        type: FormActions.setPhone,
        payload: response.data.phone
      })

      dispatch({
        type: FormActions.setService,
        payload: response.data.service
      })

      dispatch({
        type: FormActions.setBudget,
        payload: response.data.budget
      })

      dispatch({
        type: FormActions.setProjectName,
        payload: response.data.projectName
      })

      dispatch({
        type: FormActions.setProjectDescription,
        payload: response.data.projectDescription
      })
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
            <C.Title>
             <h1>{data.projectName}</h1>
              <ButtonSecondary
                title="Delete quote"
                onClick={handleDelete}
              />
            </C.Title>
            <C.Info>
              <C.Header>
              <Status
                title="Processing"
                finished={false}
                />
              <ButtonSecondary
              title="Edit quote"
              onClick={handleEdit}
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