import React from 'react'
import { Carrosel } from '../index'
import { Container, SubTitle, TextWrapper, Title } from './styles'

const SocialProof = () => {
  return (
    <Container>
      <TextWrapper>
        <SubTitle>DEPOIMENTOS</SubTitle>
        <Title>
          Recomendados por<br />
          quem é expert no assunto
        </Title>
      </TextWrapper>
      <Carrosel />
    </Container>

  )
}

export default SocialProof
