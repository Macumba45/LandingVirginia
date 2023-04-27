import styled from "styled-components";

export const MainContainer = styled.div`


`;

export const FooterContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
height: 5rem;
font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};


`;


export const TtitleFooter = styled.div`
font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.small};
  display: flex;
  justify-content: center;

`;

export const LogosRRSS = styled.a`

color: white;
margin: 1rem 1rem 2rem 1rem ;


`;

