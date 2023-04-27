import styled from "styled-components";


export const MainContainer = styled.div`



`


export const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
background-color: ${({ theme }) => theme.colors.primary};
width: 100%;
height: 5rem;
font-family: ${({ theme }) => theme.fonts.montserrat};
color: ${({ theme }) => theme.colors.primaryLight};
font-size: 1.5rem;

`