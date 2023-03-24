import { ReactNode } from 'react'
import { Container } from './styles'

interface InputWrapperProps {
  icon?: string
  children: ReactNode
}

export function InputWrapper({ icon, children }: InputWrapperProps) {
  return (
    <Container>
      {!!icon && <img src={icon} alt="" />}
      {children}
    </Container>
  )
}
