import styled from 'styled-components'

export const Container = styled.div`
  padding: 1.2rem 2.4rem;
  border: 0.7px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.1);

  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  transition: all 150ms linear;

  input {
    width: 100%;
    border: none;
    outline: none;

    text-overflow: ellipsis;
    background-color: inherit;
    color: ${(props) => props.theme['gray-700']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  &:focus-within {
    border-color: ${(props) => props.theme['gray-700']};
  }
`
