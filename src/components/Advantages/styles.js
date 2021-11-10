import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 450px){
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.inter};
  margin-left: 112px;
  display: flex;
  margin-bottom: 15px;

  @media screen and (max-width: 450px){
    flex-direction: column;
    margin-bottom: 27px;
    margin-left: 63px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 450px){
    font-size: 18px;
    margin-bottom: 8px;
  }

`;

export const Description = styled.article`
  font-size: 19px;
  line-height: 14px;
  color: ${(props) => props.theme.colors.gray};

  @media screen and (max-width: 450px){
    font-size: 12px;
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #26E9CF;
  border-radius: 50%;
  padding: 5px;

  @media screen and (max-width: 450px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;

  @media screen and (max-width: 450px){
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Button = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border-radius: 6px;
  box-shadow: -1.16333px 1.16333px 6.98px rgba(0, 0, 0, 0.26);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  width: 313px;
  padding: 15px;

  @media screen and (max-width: 450px){
    width: 297px;
    height: 57px;
  }
  
`;

export const CtaArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 120px;
  margin-top: 44px;

  @media screen and (max-width: 450px){
    margin-left: 27px;
    margin-right: 0;
    margin-bottom: 43px;
  }
`;

export const IconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 450px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
`;