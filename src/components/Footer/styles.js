import styled from "styled-components";

export const Container = styled.footer`
  margin-left: 145px;
  margin-top: 86px;
  display: flex;
`;

export const Column = styled.div``;

export const LogoArea = styled.div`
  margin-bottom: 64px;
`;

export const Logo = styled.img`
  width: 203px;
  height: 38px;
`;

export const StoreArea = styled.div`
  margin-right: 63px;
  margin-bottom: 30px;
`;

export const StoreIcon = styled.img`
  cursor: pointer;
`;

export const InfoArea = styled.div`
  margin-right: 37px;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.inter};
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 13px;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.inter};
  font-size: 17px;
  color: ${props => props.theme.colors.gray};
  margin-bottom: 7px;
  cursor: pointer;
`;

export const SocialIcons = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

export const SocialArea = styled.div`
  margin-left: 136px;
  margin-bottom: 43px;
  margin-right: 140px;
`;

export const SocialItem = styled.div`
  display: flex;
`;

export const CopyRightText = styled.p`
  font-family: ${props => props.theme.fonts.work};
  font-size: 16px;
  color: ${props => props.theme.colors.gray};
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;