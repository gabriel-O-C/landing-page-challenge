import styled from "styled-components";

export const Container = styled.section`

`;

export const SubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 18px;
  margin-top: 70px;

`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 45px;
  line-height: 62px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 58px;
`;

export const Wrapper = styled.div`
  margin-left: 135px;
`;

export const CardContainer= styled.div`
  margin-left: 135px;
  display: flex;
`;

export const Cards = styled.div`
  background-color: ${props => props.color ?? props.theme.colors.white};
  width: 570px;
  height: 692px;
  border-radius: 18px;
  margin-right: 30px;
`;

export const CardTSubTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 9px;
  margin-left: 53px;
  margin-top: 63px;

`;

export const CardTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 30px;
  line-height: 48px;
  color: ${(props) => props.theme.colors.white};
  margin-left: 53px;
`;

export const ImgArea = styled.div`
  text-align: center;
  background: linear-gradient(145.09deg, #26E9CF 11.81%, #25CDE1 95.89%);
  height: 160px;
  width: 160px;
  margin-left: 56px;
  margin-top: 37px;
  margin-right: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

`;


export const ImgTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunitoS};
  font-weight: 800;
  font-size: 37px;
  line-height: 35px;
  color: ${(props) => props.theme.colors.primary};

`;

export const ImgDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.nunitoS};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 300;
  font-size: 15px;
  line-height: 65px;
`;

export const TextWrapper = styled.div`
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const AdvantagesTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 30px;
  margin-left: 53px;
`;

export const AdvantagesBox = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
  margin-left: 77px;
`;

export const Icon = styled.img`
  color: ${props => props.color ?? props.theme.colors.white};
  width: 12px;
  height: 12px;
  margin-right: 20px;
  margin-bottom: 10px;

`;

export const AdvantagesItem = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.nunito};
  line-height: 30px;
  color: ${props => props.color ?? props.theme.colors.primary};
  margin-bottom: 14px;
`;

export const PriceBox = styled.div`
  margin-left: 70px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

export const Cipher = styled.h1`
  font-family: ${(props) => props.theme.fonts.nunitoS};
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 14px;
  margin-top: 20px;
`;

export const FromPrice = styled.sup`  
  font-family: ${(props) => props.theme.fonts.nunitoS};
  font-size: 15px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 8px;
`;

export const MainPrice = styled.p`
  color: ${(props) => props.color ?? props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.nunitoS};
  font-weight: 800;
  font-size: 37px;
`;

export const ByMonth = styled.span`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-size: 15px;
  font-weight: 700;
  color: ${props => props.color ?? props.theme.colors.whiteRgba};
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.nunito};
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PromoBox = styled.div`
  display: flex;
`;

export const ButtonArea = styled.div`
  display: flex;
  margin-left: 85px;
  margin-top: 20px;
  margin-right: 44px;
  border-radius: 6px;
  background: linear-gradient(${props => props.theme.colors.gradient});
  width: 199px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.div`
  font-family: ${(props) => props.theme.fonts.dm};
  font-size: 17px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

`;
