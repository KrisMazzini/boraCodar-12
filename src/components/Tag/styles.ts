import styled from 'styled-components'

export const Container = styled.li`
  display: block;

  max-width: 100%;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;

  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: 500;
  font-size: 1.1rem;
  text-transform: lowercase;

  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
`
