import styled from 'styled-components'

export const Container = styled.header`
  height: 100vh;
  padding: 3.2rem 2.7rem 3.2rem 3.5rem;

  overflow-y: auto;

  transform: rotateY(180deg);

  > * {
    transform: rotateY(-180deg);
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['purple-100']};
    border-radius: 999px;
  }
`

export const Logo = styled.img`
  height: 5.6rem;
  margin-bottom: 6rem;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;

  list-style-type: none;

  @media (min-width: 672px) {
    align-items: initial;
  }
`
