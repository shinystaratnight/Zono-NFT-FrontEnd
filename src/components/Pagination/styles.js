import styled from 'styled-components';
import { ArrowRightAlt } from '@styled-icons/material/ArrowRightAlt'

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Cell = styled.button`
  color: ${props => props.active ? '#fff' : '#000'};
  font-size: 16px;
  margin: 0 12px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  border: 0;
  border-radius: 100%;
  background: ${props => props.active ? 'var(--colorOrange)' : 'white'};
  cursor: pointer;
  width: ${props => props.active ? '45px' : 'auto'};
  height: ${props => props.active ? '45px' : 'auto'};
`
export const NextPrev = styled.button`
  color: #000;
  transition: all .5s;
  background-color:white;
  border: 0;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  cursor: pointer;
  display: ${props => props.disabled ? 'none' : 'flex'};
  align-items: center;  
`

export const PrevIcon = styled(ArrowRightAlt)`
  width: 18px;
  margin-right: 4px;
  transform: rotate(180deg)
`
export const NextIcon = styled(ArrowRightAlt)`
  width: 18px;
  margin-left: 4px;
`