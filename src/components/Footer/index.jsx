import React from 'react'
import { Container, LogoArea, Logo, StoreArea, StoreIcon, InfoArea, Title, Text, Column, SocialArea, SocialItem, SocialIcons, CopyRightText, SocialWrapper } from './styles'
import logo from '../../assets/logo.svg';
import google from '../../assets/google.png';
import apple from '../../assets/apple.png';
import copy from '../../assets/copyright.svg';
import face from '../../assets/facebook.svg';
import tt from '../../assets/tt.svg';
import insta from '../../assets/insta.svg';
import UpArrow from '../../assets/upArrow.svg';

const Footer = () => {
  return (
    <>
      <Container>
        <Column>
          <LogoArea>
            <Logo src={logo} alt="logo" />
          </LogoArea>
          <StoreArea>
            <StoreIcon src={google} alt="play store icon" />
            <StoreIcon src={apple} alt="apple store icon" />
          </StoreArea>
        </Column>
        <InfoArea>
          <Title>Localização</Title>
          <Text>Av. Brg. Faria Lima , 1422<br /> São Paulo - SP </Text>
        </InfoArea>
        <InfoArea>
          <Title>Fale conosco</Title>
          <Text>(22) 4442-0126</Text>
          <Text>info@digihouse.com</Text>
        </InfoArea>
        <InfoArea>
          <Title>Políticas</Title>
          <Text>Direitos autorais</Text>
          <Text>Termos de uso</Text>
          <Text>Políticas de Privacidade</Text>
        </InfoArea>
      </Container>
      <Column>
        <SocialWrapper>
          <SocialArea>
            <SocialItem>
              <SocialIcons src={copy} alt="copyright logo" />
              <CopyRightText>Copyright 2021. All Right Reserved </CopyRightText>
            </SocialItem>
          </SocialArea>
          <SocialArea>
            <SocialIcons src={face} alt="facebook logo" />
            <SocialIcons src={tt} alt="twitter logo" />
            <SocialIcons src={insta} alt="instagram logo" />
          </SocialArea>
        </SocialWrapper>
      </Column>
    </>
  )
}

export default Footer
