import { Container } from './styles'

import { Filter } from './components/Filter'
import { Header } from './components/Header'
import { Kanban } from './components/Kanban'

export function Home() {
  return (
    <Container>
      <Header />
      <Filter />
      <Kanban />
    </Container>
  )
}
