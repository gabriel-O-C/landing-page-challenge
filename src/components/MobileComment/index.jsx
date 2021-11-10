import React from 'react'
import { CardContainer, Description, ProfileContainer, ProfileIcon, Img, TextWrapper, ProfileName, ProfileTitle } from './styles'
import { StarRatings } from '..'
import Group from '../../assets/Group.svg'
import ProfileImg1 from '../../assets/Image.png';


const MobileComment = () => {
  return (
    <CardContainer className="awssld__wrapper">
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
  )
}

export default MobileComment
