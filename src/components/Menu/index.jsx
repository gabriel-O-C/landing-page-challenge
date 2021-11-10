import React from 'react'
import { Button, MenuBars, MenuItem, MenuNav } from './styles'
import Bars from '../../assets/bars.svg';

const Menu = () => {
  return (
    <MenuNav>
      <MenuBars src={Bars} alt="menu icon" />
      <MenuItem fontWeight="700" color={(props) => props.theme.colors.primary} href="#home">Home</MenuItem>
      <MenuItem href="#quemSomos">Quem somos</MenuItem>
      <MenuItem href="#planos">Planos</MenuItem>
      <MenuItem href="#faleConosco">Fale conosco</MenuItem>
      <Button>Entrar</Button>
    </MenuNav>
  )
}

export default Menu
