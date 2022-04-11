import React from 'react'

import RadioInput from 'components/RadioInput'
import {
  FilterBoxWrapper,
  Title,
  TitleSection,
  FilterMenuList,
  FilterMenu
} from './styles'

const FilterBox = (props) => {

  const { title, filterOptions, name, handleChange, value } = props

  return (
    <FilterBoxWrapper>
      <TitleSection>
        <Title>{title}</Title>
      </TitleSection>
      <FilterMenuList>
        {
          filterOptions.map((filterOption) => (
            <FilterMenu key={filterOption.value}>
              <RadioInput
                id={`${filterOption.value}-radio`}
                value={filterOption.value}
                name={name}
                onChange={handleChange}
                label={filterOption.text}
                checked={value === filterOption.value}
              />
            </FilterMenu>
          ))
        }
      </FilterMenuList>
    </FilterBoxWrapper>
  )
}

export default FilterBox
