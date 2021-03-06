import styled from "styled-components";
import { theme } from "../../theme";

export const MenuNav = styled.nav`
  display: flex;
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  justify-content: space-between;
  margin-right: 70px;
`;


export const MenuItem = styled.a`
  color: ${props => props.color ?? theme.colors.gray};
  font-weight: ${props => props.fontWeight ?? 400};
  text-decoration: none;
  margin: 15px;


  @media screen and (max-width: 450px){
    display: none;
  }

`;

export const Button = styled.a`
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  cursor: pointer;
  height: 43px;
  display: flex;
  align-items: center;
  width: 133px;
  justify-content: center;

  @media screen and (max-width: 450px){
    display: none;
  }
`;

export const MenuBars = styled.img`
  display: none;

  @media screen and (max-width: 450px){
    display: block;

  }
`;