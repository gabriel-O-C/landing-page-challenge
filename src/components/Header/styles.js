import styled from 'styled-components'


export const Container = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.inter};

  @media screen and (max-width: 450px){
    justify-content: space-between;
  }
`;

export const LogoArea = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 450px){
    width: 262px;
    margin-left: 20px;
  }

`;

export const Logo = styled.img`
  width: 200px;
  height: 38px;
  cursor: pointer;

  @media screen and (max-width: 450px){
    display: none;
  }
`;

export const LogoMobile = styled.img`
  display: none;

  @media screen and (max-width: 450px){
    display: block;
    width: 52px;
    height: 38px;
  }
`;
