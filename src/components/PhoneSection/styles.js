import styled from "styled-components";

export const Container = styled.section`
  background-color: ${props => props.theme.colors.primary};
  margin-top: 206px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px){
    margin-top: 93px;
    flex-direction: column;
  }
`;

export const ImgArea = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 152px;
  z-index: 2;
  cursor: pointer;

  @media screen and (max-width: 450px){
   display: none;

  }
`;
export const ImgAreaMobile = styled.div`
  display: none;

  @media screen and (max-width: 450px){
    width: 340px;
    height: 478px;
    display: flex;
  align-items: flex-start;
  }
`;

export const Img = styled.img`

`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 36px;

  @media screen and (max-width: 450px){
    flex-direction: column;
  }
`;

export const RobotImg = styled.img`
  width: 50px;
  height: 36px;

  @media screen and (max-width: 450px){
    margin-bottom: 23px;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 20px;
  margin-left: 23px;

  @media screen and (max-width: 450px){
    font-size: 14px;
  }
`;

export const Description = styled.article`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 19px;
  color: ${props => props.color ?? props.theme.colors.whiteRgba};
  font-weight: 400;
  line-height: 29px;

  @media screen and (max-width: 450px){
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 94px;

  @media screen and (max-width: 450px){
    display: flex;
    flex-direction: column;
    margin-left: 41px;
    margin-top: 54px;
  }

`;

export const Button = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.dm};
  font-size: 17px;
  font-weight: 700;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 60px;
  border-radius: 6px;
  margin-top: 32px;
  cursor: pointer;

  @media screen and (max-width: 450px){
    width: 294px;
    height: 46px;
    font-size: 13px;
    margin-bottom: 81px;
  }
`;