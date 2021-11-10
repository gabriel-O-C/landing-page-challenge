import styled from "styled-components";

export const Img = styled.img`
  width: 450px;
  height: 450px;

  @media screen and (max-width: 450px){
    width: 298px;
    height: 298px;
  }
`;

export const Container = styled.section`
  display: flex;
  background-color: #f8f8f8;

  @media screen and (max-width: 450px){
    flex-direction: column;
  }
  `;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-top: 37px;

  @media screen and (max-width: 450px){
    font-size: 20px;
    margin-bottom: 8px;
  }
  `;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 44px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 450px){
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 8px;
  }
  `;

export const Description = styled.article`
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 20px;
  line-height: 37px;
  color: ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 450px){
    font-size: 12px;
    line-height: 14px;
    margin-right: 5px;
    width: 253px;
    height: 90px;
  }
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 135px;
  flex: 1;
  margin-right: 150px;
  margin-top: 88px;

  @media screen and (max-width: 450px){
    margin-top: 41px;
    width: 100vw;
    margin-left: 51px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 450px){
    display: flex;
    flex-direction: column;
  }
`;