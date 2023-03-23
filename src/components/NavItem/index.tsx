import { Container } from './styles'

export interface NavItemProps {
  icon: string
  label: string
  active?: boolean
}

export function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <Container active={active}>
      <a href="#">
        <img src={icon} alt="" />
        <span>{label}</span>
      </a>
    </Container>
  )
}
