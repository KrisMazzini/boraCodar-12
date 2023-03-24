import edit from '../../../../assets/edit.svg'
import { Container, Title, ProfilePic } from './styles'

export function Header() {
  return (
    <Container>
      <Title>
        <h2>My Kanban</h2>
        <img src={edit} alt="" />
      </Title>
      <ProfilePic src="https://github.com/KrisMazzini.png" alt="" />
    </Container>
  )
}
