import styled from "styled-components";

export const MainContainer = styled.div``;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
`;

export const VideoContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 5rem;

`;

export const VideoUrl = styled.video`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border: 2px solid white;
`;