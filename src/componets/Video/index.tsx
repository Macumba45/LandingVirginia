import { FC, memo } from "react";
import {
    MainContainer,
    TitleContainer,
    Title,
    VideoContainer,
    VideoUrl,
} from "./styles";

const Video: FC = () => {
    return (
        <MainContainer>
            <TitleContainer>
                <Title>STEP 1: WATCH THIS VIDEO CASE STUDY</Title>
            </TitleContainer>
            <VideoContainer>
                <VideoUrl src="/videos/myvideo.mp4" controls />
            </VideoContainer>
        </MainContainer>
    );
};

export default memo(Video);
