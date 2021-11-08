import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const CardContainer = styled.section`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.22);
  width: 370px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.22);
`;

export const Description = styled.article`
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 16px;
  color: ${props => props.theme.colors.gray};
  margin-top: 13px;
  margin-right: 25px;

`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 25px;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;

export const ProfileName = styled.h1`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
`;

export const ProfileTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 12px;
  color: ${props => props.theme.colors.gray};
`;

export const ProfileIcon = styled.img`
  width: 44px;
  height: 34px;
`;

export const TextWrapper = styled.div`
  margin-right: 42px;
`