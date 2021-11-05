import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.inter};
  height: 100vh;
  width: 100vw;
  overflow: hidden
`;

export const TextBox = styled.article`
  margin-top: 207px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const RobotImg = styled.img`
  width: 50px;
  height: 36px;
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
`;

export const Img = styled.img`
  width: 526px;
  height: 526px;
  margin-top: 207px;
  margin-left: 70px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;