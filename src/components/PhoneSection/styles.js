import styled from "styled-components";

export const Container = styled.section`
  background-color: ${props => props.theme.colors.primary};
  margin-top: 206px;
  display: flex;
  align-items: center;
`;

export const ImgArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 152px;
  z-index: 2;
`;

export const Img = styled.img`

`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;
`;

export const RobotImg = styled.img`
  width: 50px;
  height: 36px;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 20px;
  margin-left: 23px;
`;

export const Description = styled.article`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 19px;
  color: ${props => props.color ?? props.theme.colors.whiteRgba};
  font-weight: 400;
  line-height: 29px;
`;

export const ContentWrapper = styled.div`
  margin-left: 94px;

`;