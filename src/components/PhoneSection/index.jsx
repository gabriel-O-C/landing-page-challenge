import React from 'react'
import { Button, Container, ContentWrapper, Description, Img, ImgArea, ImgAreaMobile, RobotImg, TextWrapper, Title } from './styles'
import Phone from '../../assets/Phone.svg';
import Robo from '../../assets/robo.svg'
const PhoneSection = () => {
  return (
    <Container>
      <ImgArea>
        <Img src={Phone} alt="tela da plataforma" />
      </ImgArea>
      <ContentWrapper>
        <TextWrapper>
          <RobotImg src={Robo} alt="robo da logo" />
          <Title>
            Baixe aulas no app e estude offline
          </Title>
        </TextWrapper>
        <Description>
          Receba lembretes no seu celular e tenha a facilidade<br /> de estudar a qualquer hora e de qualquer lugar.<br />
          <span style={{ color: 'white', fontWeight: 600 }}>Baixe nosso app e confira.</span>
        </Description>
        <Button>Conheça nosso aplicativo <span style={{ fontSize: 32, marginLeft: 32 }}>→</span></Button>

      </ContentWrapper>
      <ImgAreaMobile>
        <Img src={Phone} alt="tela da plataforma" />
      </ImgAreaMobile>
    </Container>
  )
}

export default PhoneSection
