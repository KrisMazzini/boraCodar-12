import styled from 'styled-components'

export const Container = styled.header`
  padding: 0 2.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  img {
    cursor: pointer;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  h2 {
    font-weight: 700;
    font-size: 3.2rem;
    color: ${(props) => props.theme['brown-700']};
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const ProfilePic = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`
