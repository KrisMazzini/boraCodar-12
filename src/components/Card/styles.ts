import styled from 'styled-components'

export const Container = styled.div`
  width: 32rem;

  padding: 2.4rem;
  border-radius: 8px;
  box-shadow: 0px 4px 16px #eae2fd;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  line-height: 130%;
  background-color: ${(props) => props.theme.white};

  h4 {
    width: 100%;

    font-weight: 700;
    font-size: 1.4rem;
    line-height: 130%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${(props) => props.theme['brown-700']};
  }

  p {
    width: 100%;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 500;
    font-size: 1.4rem;

    color: ${(props) => props.theme['brown-500']};
  }
`

export const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.8rem;

  list-style-type: none;
`
