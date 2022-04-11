import styled from 'styled-components';

export const RadioControl = styled.div`

`
export const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  opacity: 0;
  &:checked+label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 10px;
    background: var(--colorOrange);
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 var(--colorOrange), 4px 0 0 var(--colorOrange), 4px -2px 0 var(--colorOrange), 4px -4px 0 var(--colorOrange), 4px -6px 0 var(--colorOrange), 4px -8px 0 var(--colorOrange);
    transform: rotate(45deg);
  }
`

export const Label = styled.label`
  padding: 0;
  margin: 0;
  position: relative;
  display: block;
  color: #4c5866;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &::before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: #f3f6f8;
  }  
`

export const LabelText = styled.span`
  display: inline-block;
  position: relative;
  top: 2px;
  letter-spacing: 1px;
  color: #4c5866;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`
