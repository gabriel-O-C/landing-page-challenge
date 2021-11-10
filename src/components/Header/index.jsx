import React from 'react'
import { Container, Logo, LogoArea, LogoMobile } from './styles'
import { Menu } from '../index'
import logo from '../../assets/logo.svg'
import logoM from '../../assets/LogoMobile.svg'

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={logo} alt="logo" />
        <LogoMobile src={logoM} alt="logo" />
      </LogoArea>
      <Menu />
    </Container>
  )
}

export default Header
