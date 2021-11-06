import React from 'react'
import { Container, Description, Img, SubTitle, Title, Wrapper } from './styles'
import Rocket from '../../assets/image 45.svg';
import Medal from '../../assets/image 43.svg';
const TwoColumns = () => {
  return (
    <Container>
      <Wrapper>
        <Img src={Rocket} />
        <SubTitle>QUER SER APROVADO?</SubTitle>
        <Title>
          Se seu foco é ser aprovado,<br /> nós estamos aqui por você.
        </Title>
        <Description>
          Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.
        </Description>
      </Wrapper>
      <Wrapper>
        <SubTitle>100% MATEMÁTICA</SubTitle>
        <Title>
          Matemática para quem<br /> quer entrar na facul.
        </Title>
        <Description>
          Somos um cursinho online especialista em ensinar matemática. Temos os melhores professores mestres e doutores para tirar suas dúvidas e te ensinar matemática desde a teoria até a resolução de exercícios de todos os níveis.
        </Description>
        <Img src={Medal} />
      </Wrapper>
    </Container>
  )
}

export default TwoColumns
