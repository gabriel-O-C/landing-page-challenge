import React from 'react'
import { StarRatings } from '..'
import { CardContainer, Container, Description, Img, ProfileContainer, ProfileIcon, ProfileName, ProfileTitle, TextWrapper } from './styles';
import ProfileImg1 from '../../assets/Image.png';
import ProfileImg2 from '../../assets/Image(1).png';
import ProfileImg3 from '../../assets/Image(2).png';
import Group from '../../assets/Group.svg'
const Comment = () => {
  return (
    <Container>
      <CardContainer>
        <StarRatings />
        <Description>
          Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.
        </Description>
        <ProfileContainer>
          <Img src={ProfileImg1} />
          <TextWrapper>
            <ProfileName>Amanda Merien</ProfileName>
            <ProfileTitle>Analista junior</ProfileTitle>
          </TextWrapper>
          <ProfileIcon src={Group} />
        </ProfileContainer>
      </CardContainer>
      <CardContainer>
        <StarRatings />
        <Description>
          Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.
        </Description>
        <ProfileContainer>
          <Img src={ProfileImg2} />
          <TextWrapper>
            <ProfileName>Lucas Correia</ProfileName>
            <ProfileTitle>CEO / Creative IT</ProfileTitle>
          </TextWrapper>
          <ProfileIcon src={Group} />
        </ProfileContainer>
      </CardContainer>
      <CardContainer>
        <StarRatings />
        <Description>
          Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu elementum odio justo. Rhoncus.
        </Description>
        <ProfileContainer>
          <Img src={ProfileImg3} />
          <TextWrapper>
            <ProfileName>Rodrigo Godoy</ProfileName>
            <ProfileTitle>Presidente / Amazon</ProfileTitle>
          </TextWrapper>
          <ProfileIcon src={Group} />
        </ProfileContainer>
      </CardContainer>
    </Container>
  )
}

export default Comment
