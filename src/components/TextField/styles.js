import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-top: 20px;
  position: relative;
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  color: #818992;
  margin-bottom: 8px;
  text-transform: capitalize; 
`

export const Input = styled.input`
  padding: 15px 15px;
  width: 100%;
  outline: 0;
  font-size: 15px;
  color: #222;
  border: 1px solid #eaeff5;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
  border-radius: 6px;
  line-height: normal;
  height: auto;
`
export const HelpText = styled.small`
  font-size: 15px;
  color: #818992;
  display: block;
  text-align: right;
  margin-top: 8px;
`
export const Textarea = styled.textarea`
  width: 100%;
  padding: 15px 15px;
  width: 100%;
  outline: 0;
  font-size: 15px;
  color: #222;
  border: 1px solid #eaeff5;
  border-radius: 6px;
  line-height: normal;
  height: auto;
  box-shadow: 0 4px 10px 0 rgb(41 128 185 / 7%);
`