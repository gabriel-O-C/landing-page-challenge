import styled from "styled-components";

export const Container = styled.section`
  margin-left: 134px;
  margin-top: 102px;
`;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 48px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 70px;
`;