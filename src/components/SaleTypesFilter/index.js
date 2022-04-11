import React from 'react'

import Checkbox from 'components/Checkbox'
import {
  FilterBoxWrapper,
  Title,
  TitleSection,
  FilterMenuList,
  FilterMenu
} from './styles'

const SaleTypesFilter = (props) => {

  const { title, filterOptions, name, handleChange, values } = props

  return (
    <FilterBoxWrapper>
      <TitleSection>
        <Title>{title}</Title>
      </TitleSection>
      <FilterMenuList>
        {
          filterOptions.map((filterOption) => (
            <FilterMenu key={filterOption.value}>
              <Checkbox
                id={`${filterOption.value}-radio`}
                value={filterOption.value}
                name={name}
                onChange={handleChange}
                label={filterOption.text}
                checked={values.includes(filterOption.value)}
              />
            </FilterMenu>
          ))
        }
      </FilterMenuList>
    </FilterBoxWrapper>
  )
}

export default SaleTypesFilter
