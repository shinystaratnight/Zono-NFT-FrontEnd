import React from 'react'

import {
  RadioControl,
  Input,
  Label,
  LabelText
} from './styles'

const RadioInput = (props) => {

  const { id, label, checked, ...others} = props

  return (
    <RadioControl>
      <Input type='radio' id={id} checked={checked} {...others} />
      <Label htmlFor={id}>
        <LabelText>{label}</LabelText>
      </Label>
    </RadioControl>
  )
}

export default RadioInput
