import { ReactNode } from 'react'
import { CardsWrapper, Container } from './styles'

interface CardListProps {
  status: 'to-do' | 'doing' | 'done'
  children: ReactNode
}

export function CardList({ status, children }: CardListProps) {
  return (
    <Container>
      <h3>{status}</h3>
      <CardsWrapper>{children}</CardsWrapper>
    </Container>
  )
}
