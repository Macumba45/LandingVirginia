import { FC, memo } from "react";
import { MainContainer, Title, TitleContainer, VideoContainer, VideoUrl } from "./style";


const Video: FC = () => {


    return (

        <MainContainer>
            <TitleContainer>
                <Title>
                    STEP 1: WATCH THIS VIDEO CASE STUDY
                </Title>
            </TitleContainer>
            <VideoContainer>
                <VideoUrl />
            </VideoContainer>
        </MainContainer>

    )
}


export default memo(Video)