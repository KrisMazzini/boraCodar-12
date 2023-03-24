import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Container, Main } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}
