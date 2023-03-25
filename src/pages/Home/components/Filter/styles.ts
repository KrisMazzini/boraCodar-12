import styled from 'styled-components'

export const Container = styled.form`
  padding: 0 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.6rem;

  @media (min-width: 672px) {
    flex-direction: row;
  }
`
