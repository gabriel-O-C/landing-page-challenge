import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fonts.inter};
  margin-left: 112px;
  display: flex;
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};

`;

export const Description = styled.article`
  font-size: 19px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  border: 2px solid #26E9CF;
  border-radius: 50%;
  padding: 5px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
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
  
`;

export const CtaArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 120px;
  margin-top: 44px;
`;