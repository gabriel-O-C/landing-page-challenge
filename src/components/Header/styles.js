import styled from 'styled-components'


export const Container = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.inter};
`;

export const LogoArea = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;

`;

export const Logo = styled.img`
  width: 200px;
  height: 38px;
  cursor: pointer;
`;

