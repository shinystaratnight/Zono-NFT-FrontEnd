import React from 'react'

import {
  FormGroup,
  Label,
  Input,
  HelpText,
  Textarea
} from './styles'

const TextField = (props) => {

  const { type, label, helpText, name, onChange, value, placeholder, rows } = props

  return (
    <FormGroup>
      <Label>{label}</Label>
      {
        rows ? (
          <Textarea
            name={name}
            onChange={onChange}
            value={value}
            rows={rows}
          >
          </Textarea>
        ) : (
          <Input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )
      }

      {
        helpText && <HelpText>{helpText}</HelpText>
      }
    </FormGroup>
  )
}

export default TextField
