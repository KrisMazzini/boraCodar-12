import styled from 'styled-components'

interface ContainerProps {
  active: boolean
}

export const Container = styled.li<ContainerProps>`
  a {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    color: ${(props) =>
      props.active ? props.theme.white : props.theme['purple-300']};
  }

  span {
    display: none;
  }

  @media (min-width: 672px) {
    span {
      display: initial;
    }
  }
`
