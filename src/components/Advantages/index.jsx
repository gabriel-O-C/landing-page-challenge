import React from 'react'
import { Icon, Wrapper, TextWrapper, Title, Description, Container, Button, CtaArea, IconWrapper } from './styles'
import Root from '../../assets/root.svg';
import Box from '../../assets/box.svg';
import Compass from '../../assets/compass.svg';
const Advantages = () => {
  return (
    <Container>
      <Wrapper>
        <IconWrapper>

          <Icon src={Root} />
        </IconWrapper>
        <TextWrapper>
          <Title>100% focado em Matemática</Title>
          <Description>
            Todo material é construído por profissionais<br />
            especializados e com foco no perfil de<br />
            cada vestibular.
          </Description>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <IconWrapper>
          <Icon src={Box} />
        </IconWrapper>
        <TextWrapper>
          <Title>Acompanhamento de perto!</Title>
          <Description>
            Todo o suporte que você precisa para<br />
            aprender o conteúdo dos principais<br /> vestibulares!
          </Description>
        </TextWrapper>
      </Wrapper>
      <Wrapper>
        <IconWrapper>
          <Icon src={Compass} />
        </IconWrapper>
        <TextWrapper>
          <Title>Matemática de um jeito fácil!</Title>
          <Description>
            Resolução instantânea de qualquer equação<br />
            algébrica na plataforma, além de vídeos, apostilas,<br /> simulados e central de dúvidas 24h!
          </Description>
        </TextWrapper>
      </Wrapper>
      <CtaArea>
        <Button>Quero ser aprovado <span style={{ fontSize: 32, marginLeft: 32 }}>→</span></Button>
      </CtaArea>

    </Container>
  )
}

export default Advantages
