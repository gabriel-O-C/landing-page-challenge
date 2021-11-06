import styled from "styled-components";

export const Img = styled.img`
  width: 450px;
  height: 450px;
`;

export const Container = styled.section`
  display: flex;
  background-color: #f8f8f8;
  `;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-top: 37px;
  `;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 44px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};
  `;

export const Description = styled.article`
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 20px;
  line-height: 37px;
  color: ${(props) => props.theme.colors.gray};
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 135px;
  flex: 1;
  margin-right: 150px;
  margin-top: 88px;
`;