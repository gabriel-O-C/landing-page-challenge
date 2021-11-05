import React from 'react'
import { Container, Logo, LogoArea } from './styles'
import { Menu } from '../index'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={logo} />
      </LogoArea>
      <Menu />
    </Container>
  )
}

export default Header
