import React from 'react'
import { Button, Container, Logo, LogoArea, Menu, MenuItem } from './styles'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <Logo src={logo} />
      </LogoArea>
      <Menu>
        <MenuItem weight="700" color={(props) => props.theme.colors.primary} href="#home">Home</MenuItem>
        <MenuItem href="#quemSomos">Quem somos</MenuItem>
        <MenuItem href="#planos">Planos</MenuItem>
        <MenuItem href="#faleConosco">Fale conosco</MenuItem>
        <Button>Entrar</Button>
      </Menu>
    </Container>
  )
}

export default Header
