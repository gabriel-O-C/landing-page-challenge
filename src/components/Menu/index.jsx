import React from 'react'
import { Button, MenuItem, MenuNav } from './styles'

const Menu = () => {
  return (
    <MenuNav>
      <MenuItem weight="700" color={(props) => props.theme.colors.primary} href="#home">Home</MenuItem>
      <MenuItem href="#quemSomos">Quem somos</MenuItem>
      <MenuItem href="#planos">Planos</MenuItem>
      <MenuItem href="#faleConosco">Fale conosco</MenuItem>
      <Button>Entrar</Button>
    </MenuNav>
  )
}

export default Menu
