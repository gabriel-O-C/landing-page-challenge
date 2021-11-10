import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Img = styled.img`
  margin-left: 45px;

  @media screen and (max-width: 450px){
    display: none;
  }
`;