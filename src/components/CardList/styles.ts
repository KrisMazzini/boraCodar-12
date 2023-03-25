import styled from 'styled-components'

export const Container = styled.div`
  min-width: 37rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-radius: 8px 8px 0 0;

  h3 {
    padding: 2.4rem;

    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['brown-700']};

    text-transform: capitalize;
  }
`

export const DraggedOverContainer = styled(Container)`
  background-color: ${(props) => props.theme['purple-100']};
  filter: brightness(0.9);
`

export const CardsWrapper = styled.div`
  height: 100%;
  padding: 0 2.4rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 2px;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['gray-200']};
      border-radius: 999px;
    }
  }
`
