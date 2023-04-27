import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 2rem;
margin-bottom: 5rem;

`

export const TitleContainer = styled.div`
margin-bottom: 5rem;
margin-top: 2rem;

`

export const Title = styled.h1`
display:flex;
justify-content: center;
font-family: ${({ theme }) => theme.fonts.montserrat};
color: ${({ theme }) => theme.colors.secondary};
font-size: ${({ theme }) => theme.fontSizes.small};


`


export const VideoContainer = styled.div`

width: 80vw;
height: 80vh;
border: 2px solid black;
margin: 0 auto;

`

export const VideoUrl = styled.video`

`