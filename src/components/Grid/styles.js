import styled from 'styled-components';

export const GridContainerDom = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (max-width: 768px) {
    max-width: 720px;
  }
  @media screen and (max-width: 991px) and (min-width: 768px) {
    max-width: 900px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const GridRowDom = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: ${props => props.justifyContent ? props.justifyContent : ''};
`
export const GridItemDom = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  @media screen and (max-width: 575px) {
    flex: ${props => props.xs ? `0 0 calc((100% / 12) * ${props.xs})` : '0 0 100%'};
    max-width: ${props => props.xs ? `calc((100% / 12) * ${props.xs})` : '100%'};
  }
  @media screen and (min-width: 576px) {
    flex: ${props => props.sm ? `0 0 calc((100% / 12) * ${props.sm})` : '0 0 100%'};
    max-width: ${props => props.sm ? `calc((100% / 12) * ${props.sm})` : '100%'};
  }
  @media screen and (min-width: 768px) {
    flex: ${props => props.md ? `0 0 calc((100% / 12) * ${props.md})` : '0 0 100%'};
    max-width: ${props => props.md ? `calc((100% / 12) * ${props.md})` : '100%'};
  }
  @media screen and (min-width: 992px) {
    flex: ${props => props.lg ? `0 0 calc((100% / 12) * ${props.lg})` : '0 0 100%'};
    max-width: ${props => props.lg ? `calc((100% / 12) * ${props.lg})` : '100%'};
  }
  @media screen and (min-width: 1200px) {
    flex: ${props => props.xl ? `0 0 calc((100% / 12) * ${props.xl})` : '0 0 100%'};
    max-width: ${props => props.xl ? `calc((100% / 12) * ${props.xl})` : '100%'};
  }
`
