import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--colorOrange);
  color: white;
  border: 0;
  padding: 12px 30px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: ${props => props.size === 'medium' ? '16px' : '18px'};
  line-height: 1.3;
  letter-spacing: 0.025em;
  font-family: 'Roboto', sans-serif;
  height: ${props => props.size === 'large' ? '60px' : 'auto'};
  width: ${props => props.width || 'auto'};
  margin: ${props => props.margin || '0'};
  &:hover {
    background-color: #000;
    color: white;
  }
`
