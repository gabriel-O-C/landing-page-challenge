import React from 'react'
import { Comments } from '../index'
import { Container, SubTitle, Title } from './styles'

const SocialProof = () => {
  return (
    <Container>
      <SubTitle>DEPOIMENTOS</SubTitle>
      <Title>
        Recomendados por<br />
        quem é expert no assunto
      </Title>
      <Comments />
    </Container>
  )
}

export default SocialProof
