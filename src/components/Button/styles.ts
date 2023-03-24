import styled from 'styled-components'

export const Container = styled.button`
  padding: 1.2rem 3.2rem;
  outline: none;
  border: none;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  font-size: 1.4rem;
  line-height: 2.4rem;

  background-color: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  transition: all 150ms linear;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    opacity: 0.8;
  }
`
