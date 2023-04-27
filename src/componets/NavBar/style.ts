import styled from "styled-components";


export const MainContainer = styled.div`



`


export const NavBarContainer = styled.div`
align-items: center;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.primaryLight};
display: flex;
font-family: ${({ theme }) => theme.fonts.montserrat};
font-size: 1.5rem;
height: 5rem;
justify-content: center;
width: 100%;

`