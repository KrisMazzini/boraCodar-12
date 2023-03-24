import { Container } from './styles'

import { Card } from '../../../../components/Card'
import { CardList } from '../../../../components/CardList'

export function Kanban() {
  return (
    <Container>
      <CardList status="to-do">
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
      </CardList>
      <CardList status="doing">
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
      </CardList>
      <CardList status="done">
        <Card
          title="Teste"
          description="Testando este componente de card na página"
          tags={['rocketseat', 'boraCodar']}
        />
      </CardList>
    </Container>
  )
}
