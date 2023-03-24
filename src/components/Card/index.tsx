import { Container, TagsWrapper } from './styles'
import { Tag } from '../Tag'

interface CardProps {
  title: string
  description: string
  tags?: string[]
}

export function Card({ title, description, tags }: CardProps) {
  return (
    <Container>
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
