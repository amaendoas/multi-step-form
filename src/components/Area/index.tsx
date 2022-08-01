import { Container } from "./styles";
import { ChangeEvent }  from 'react'

type Props = {
  icon: any,
  value: string,
  name: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  checked: boolean
}

export function Area({icon: Icon, value, name, checked, onChange}: Props){
  return (
    <Container>
      <input type="radio" id={value} name={name} value={value} onChange={onChange} checked={checked}/>
      <label htmlFor={value}>
      <span>
      <Icon/>
      </span>
        <p>
        {value}
        </p>
      </label>
    </Container>
  )
}