import React from 'react'

import {
  CheckboxControl,
  Input,
  Label,
  LabelText
} from './styles'

const Checkbox = (props) => {

  const { id, label, checked, ...others} = props

  return (
    <CheckboxControl>
      <Input type='checkbox' id={id} checked={checked} {...others} />
      <Label htmlFor={id}>
        <LabelText>{label}</LabelText>
      </Label>
    </CheckboxControl>
  )
}

export default Checkbox
