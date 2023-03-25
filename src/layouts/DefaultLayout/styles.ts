import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  min-width: 43.2rem;
  width: 100%;
  height: calc(100vh - 0.4rem);

  margin-top: 0.4rem;
  padding: 4.8rem 3.2rem 0;

  border-radius: 32px 0 0 0;

  background-color: ${(props) => props.theme['gray-100']};
  overflow: hidden;
`
