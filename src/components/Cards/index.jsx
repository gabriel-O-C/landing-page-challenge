import React from 'react'
import { Container, SubTitle, Title, Wrapper, CardContainer, Cards, CardTSubTitle, CardTitle, ImgArea, TextWrapper, ContentWrapper, ImgTitle, ImgDescription, AdvantagesBox, Icon, AdvantagesItem, AdvantagesTitle, Cipher, PriceBox, FromPrice, MainPrice, ByMonth, Description, PriceWrapper, PromoBox, ButtonArea, Button, PriceBoxWhite } from './styles'
import VectorWhite from '../../assets/VectorWhite.svg';
import Vector from '../../assets/Vector.svg';
const Card = () => {
  return (
    <Container>
      <Wrapper>
        <SubTitle>NOSSOS PLANOS</SubTitle>
        <Title>Invista no seu futuro</Title>
      </Wrapper>
      <CardContainer>
        <Cards color={props => props.theme.colors.primary}>
          <ContentWrapper>
            <TextWrapper>
              <CardTSubTitle>1 ANO DE ACESSO</CardTSubTitle>
              <CardTitle>Plano Recomendado</CardTitle>
            </TextWrapper>
            <ImgArea>
              <ImgTitle>70%</ImgTitle>
              <ImgDescription>de desconto</ImgDescription>
            </ImgArea>
          </ContentWrapper>
          <AdvantagesTitle>Vantagens</AdvantagesTitle>
          <AdvantagesBox>
            <Icon src={VectorWhite}></Icon>
            <AdvantagesItem color="#fff">
              Acesso a todos os benefícios da Plataforma<br />
              (Videoaulas, Exercícios, Apostilas e muito mais)
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={VectorWhite}></Icon>
            <AdvantagesItem color="#fff">
              36 aulas ao vivo
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={VectorWhite}></Icon>
            <AdvantagesItem color="#fff">
              Revisão para o ENEM
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={VectorWhite}></Icon>
            <AdvantagesItem color="#fff">
              Grupo no Whatsapp com professores e alunos
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={VectorWhite}></Icon>
            <AdvantagesItem color="#fff">
              Reforço para FUVEST, Unicamp e Vestibulares de Medicina
            </AdvantagesItem>
          </AdvantagesBox>
          <PriceBox>
            <PromoBox>
              <Cipher>$</Cipher>
              <PriceWrapper>
                <FromPrice>de R$178,80</FromPrice>
                <MainPrice>49,90<ByMonth>/Ano</ByMonth></MainPrice>
                <Description>Menos de 5 reais por mês {":)"}</Description>
              </PriceWrapper>
              <ButtonArea>
                <Button>Eu quero!</Button>
              </ButtonArea>
            </PromoBox>
          </PriceBox>
        </Cards>


        <Cards style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#201E542E' }}>
          <ContentWrapper>
            <TextWrapper>
              <CardTSubTitle>6 meses de acesso</CardTSubTitle>
              <CardTitle>Plano Aprovado</CardTitle>
            </TextWrapper>
          </ContentWrapper>
          <AdvantagesTitle>Vantagens</AdvantagesTitle>
          <AdvantagesBox>
            <Icon src={Vector}></Icon>
            <AdvantagesItem >
              Acesso a todos os benefícios da Plataforma<br />
              (Videoaulas, Exercícios, Apostilas e muito mais)
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={Vector}></Icon>
            <AdvantagesItem >
              36 aulas ao vivo
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={Vector} color={props => props.theme.colors.primary}></Icon>
            <AdvantagesItem >
              Revisão para o ENEM
            </AdvantagesItem>

          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={Vector}></Icon>
            <AdvantagesItem >
              Grupo no Whatsapp com professores e alunos
            </AdvantagesItem>
          </AdvantagesBox>
          <AdvantagesBox>
            <Icon src={Vector}></Icon>
            <AdvantagesItem >
              Reforço para FUVEST, Unicamp e Vestibulares de Medicina
            </AdvantagesItem>
          </AdvantagesBox>
          <PriceBoxWhite>
            <PromoBox>
              <Cipher>$</Cipher>
              <PriceWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <MainPrice color={props => props.theme.colors.primary}>39,90
                  <ByMonth color={props => props.theme.colors.primary} style={{ marginRight: '35px' }}>/Semestre</ByMonth>
                </MainPrice>
              </PriceWrapper>
              <ButtonArea>
                <Button>Eu quero!</Button>
              </ButtonArea>
            </PromoBox>
          </PriceBoxWhite>
        </Cards>
      </CardContainer>
    </Container>
  )
}

export default Card
