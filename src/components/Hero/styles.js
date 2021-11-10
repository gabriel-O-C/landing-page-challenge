import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.inter};
  width: 100vw;

  @media screen and (max-width: 450px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextBox = styled.article`
  margin-top: 207px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 450px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

export const RobotImg = styled.img`
  width: 50px;
  height: 36px;

  @media screen and (max-width: 450px){
   margin-bottom: 23px;
  }
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-left: 23px;
`;

export const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.fredoka};
  font-size: 65px;
  line-height: 75px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 32px;
  overflow-y: hidden;

  @media screen and (max-width: 450px){
    font-size: 40px;
    line-height: 40px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 32px;

  @media screen and (max-width: 450px){
    font-size: 14px;
    margin-bottom: 95px;
  }
`;

export const CtaButton = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 60px;
  cursor: pointer;
  font-weight: 700;

  @media screen and (max-width: 450px){
    width: 294px;
    margin-bottom: 146px;
  }
`;

export const Img = styled.img`
  width: 526px;
  height: 526px;
  margin-top: 207px;
  margin-left: 70px;

  @media screen and (max-width: 450px){
    display: none;
  }

`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;