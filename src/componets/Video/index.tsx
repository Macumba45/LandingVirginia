import { FC, memo } from "react";
import {
  MainContainer,
  TitleContainer,
  Title,
  VideoContainer,
  VideoUrl,
  Span,
} from "./styles";

const Video: FC = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>
          Descubre la nueva profesión con la que puedes generar entre
        </Title>
        <Span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1, color: "#fbfbfb" }}
          transition={{ duration: 0.5 }}
        >
          3000€ y 5000€ al mes
        </Span>
      </TitleContainer>
      <VideoContainer>
        <VideoUrl src="/videos/myvideo.mp4" controls />
      </VideoContainer>
    </MainContainer>
  );
};

export default memo(Video);
