import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow: auto;

  display: flex;
  align-items: flex-start;
  gap: 2.4rem;

  ::-webkit-scrollbar {
    height: 4px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-500']};
      border-radius: 999px;
    }
  }

  @media (min-width: 1024px) {
    gap: 4.8rem;
  }
`
