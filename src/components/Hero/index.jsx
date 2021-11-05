import React from 'react'
import { Column, Container, Content, CtaButton, Description, Heading, Img, RobotImg, SubTitle, TextBox } from './styles'
import Robot from '../../assets/robo.svg'
import HeroImg from '../../assets/Home.svg'

const Hero = () => {
  return (
    <Container>
      <Column>
        <Content>
          <TextBox>
            <RobotImg src={Robot} />
            <SubTitle>Seja aprovado no Enem e Vestibulares {":)"}</SubTitle>
          </TextBox>
          <Heading>Você escolhe<br /> o que aprender<span style={{ color: '#3AFFE5' }}>.</span></Heading>
          <Description>
            Aqui você terá toda assistência que precisa<br />
            com materiais desenvolvido por <span style={{ fontWeight: 700 }}>mestres e doutores<br /> em matemática</span>
          </Description>
          <CtaButton>Veja nossos planos <span style={{ fontSize: 32, marginLeft: 32 }}>→</span></CtaButton>
        </Content>
        <Img src={HeroImg} />
      </Column>
    </Container>
  )
}

export default Hero
