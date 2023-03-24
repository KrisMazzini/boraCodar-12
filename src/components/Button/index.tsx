import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  title: string
}

export function Button({ icon, title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {!!icon && <img src={icon} alt="" />}
      {title}
    </Container>
  )
}
