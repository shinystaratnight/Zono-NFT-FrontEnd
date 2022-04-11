import styled from 'styled-components';

export const ExploreWrapper = styled.div`
  padding: 90px 0 120px;
`
export const SearchFormWrapper = styled.div`
  margin-top: 30px;
`

export const NftCardList = styled.div`
  position: sticky;
  top: 100px;
`
export const TabContent = styled.div`

`
export const TabPane = styled.div`
  display: ${props => props.active ? 'block' : 'none'}
`

export const PaginationBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`

export const LoadingLabel = styled.div`
  padding: 12px 30px;
  border: 1px solid var(--colorOrange);
  border-radius: 100px;
  display: inline-block;
  color: #fff;
  transition: all 0.3s;
  background-color: var(--colorOrange);
  margin-left: auto;
  display: flex;
  width: fit-content;
  margin-right: auto;
  margin-top: 2rem;
`
