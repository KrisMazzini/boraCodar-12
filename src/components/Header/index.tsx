import logo from '../../assets/logo.svg'
import board from '../../assets/board.svg'
import people from '../../assets/people.svg'
import document from '../../assets/document.svg'
import settings from '../../assets/settings.svg'

import { Container, Logo, NavList } from './styles'

import { NavItem, NavItemProps } from '../NavItem'

export function Header() {
  const navItems: NavItemProps[] = [
    {
      icon: board,
      label: 'Boards',
      active: true,
    },
    {
      icon: people,
      label: 'Teams',
    },
    {
      icon: document,
      label: 'Reports',
    },
    {
      icon: settings,
      label: 'Settings',
    },
  ]

  return (
    <Container>
      <Logo src={logo} alt="" />
      <nav>
        <NavList>
          {navItems.map((navItem) => {
            return <NavItem {...navItem} key={navItem.label} />
          })}
        </NavList>
      </nav>
    </Container>
  )
}
