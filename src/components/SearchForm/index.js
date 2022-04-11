import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';

import {
  GridRow,
  GridItem
} from 'components/Grid'
import {
  SearchFormWrapper,
  InputForm,
  Input,
  Button,
  NavTabs,
  NavItem,
  NavLink,
  ViewModuleIcon,
  ViewListIcon,
  InputFormWrapper
} from './styles'

const SearchForm = (props) => {

  const { onChangeInput, onSelectView, viewMethod, hideViewTab } = props

  const [text, setText] = useState('')

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      onChangeInput(e.target.value)
    }
  }

  return (
    <SearchFormWrapper>
      <GridRow>
        <GridItem xl={6} lg={6} md={6} sm={6} xs={6}>
          <InputFormWrapper>
            <InputForm>
              <Input placeholder='Search...' onChange={(e) => setText(e.target.value)} onKeyDown={handleChange} />
              <Button onClick={() => onChangeInput(text)}>
                <SearchIcon />
              </Button>
            </InputForm>
          </InputFormWrapper>
        </GridItem>
        {
          hideViewTab ? <></> : (
            <GridItem xl={6} lg={6} md={6} sm={6} xs={6}>
              <NavTabs>
                <NavItem>
                  <NavLink onClick={(e) => { e.preventDefault(); onSelectView('grid') }} active={viewMethod === 'grid'}>
                    <ViewModuleIcon />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) => { e.preventDefault(); onSelectView('list') }} active={viewMethod === 'list'}>
                    <ViewListIcon />
                  </NavLink>
                </NavItem>
              </NavTabs>
            </GridItem>
          )
        }
      </GridRow>
    </SearchFormWrapper>
  )
}

export default SearchForm
