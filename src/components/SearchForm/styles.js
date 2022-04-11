import styled from 'styled-components';

import { ViewList } from '@styled-icons/material/ViewList'
import { ViewModule } from '@styled-icons/material-sharp/ViewModule'

export const SearchFormWrapper = styled.div`
  border: 1px solid #eee;
  padding: 12px 15px 12px 15px;
`
export const InputForm = styled.div`
  position: relative;
  max-width: 250px;
  width: 100%;
`
export const Input = styled.input`
  overflow: visible;
  width: 100%;
  font-size: 15px;
  padding: 0px 25px 0px 0px;
  border: 0px;
  outline: 0;
  background-color: transparent;
`
export const Button = styled.button`
  border: 0px;
  padding: 0px;
  font-size: 16px;
  background: transparent;
  color: #888;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  outline: 0;
  cursor: pointer;
`

export const ViewListIcon = styled(ViewList)`
  width: 24px; 
  color: var(--colorOrange);
`
export const ViewModuleIcon = styled(ViewModule)`
  width: 24px;  
  color: var(--colorOrange);
`

export const NavTabs = styled.ul`
  margin: 0;
  float: right;
  border: 0;
  flex-wrap: wrap;
  display: flex;
  list-style: none;
  padding-left: 0;
`
export const NavItem = styled.li`
  list-style: none;
  margin: 0 5px;
`
export const NavLink = styled.a`
  height: 44px;
  width: 44px;
  display: flex;
  background-color: #f8f8f8!important;
  font-size: 18px;
  line-height: 42px;
  text-align: center;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }
  svg {
    color: ${props => props.active ? 'var(--colorOrange)!important' : '#222'}
  }
`
export const InputFormWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`