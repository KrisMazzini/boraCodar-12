import { DragEvent } from 'react'

import { Container, TagsWrapper } from './styles'
import { Tag } from '../Tag'

export interface CardProps {
  title: string
  description: string
  tags?: string[]
  id: string
}

export function Card({ title, description, tags, id }: CardProps) {
  function handleDragStart(event: DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData('text/plain', id)
  }

  return (
    <Container draggable onDragStart={handleDragStart}>
      <h4>{title}</h4>
      <p>{description}</p>
      <TagsWrapper>
        {tags?.map((tag) => (
          <Tag name={tag} key={tag} />
        ))}
      </TagsWrapper>
    </Container>
  )
}
