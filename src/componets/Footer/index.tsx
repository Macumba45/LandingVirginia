import { FC, memo } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FooterContainer, LogosRRSS, TtitleFooter, MainContainer } from "./style";

const Footer: FC = () => {
    return (
        <MainContainer>
            <TtitleFooter>
                Visita mis Redes Sociales
            </TtitleFooter>
            Visita mis Redes Sociales
            <FooterContainer>
                <LogosRRSS href="https://www.instagram.com/virginiahidalgoe">
                    <InstagramIcon fontSize="large" />
                </LogosRRSS>
                <LogosRRSS href="https://www.youtube.com/@virginiahidalgo7980">
                    <YouTubeIcon fontSize="large" />
                </LogosRRSS>
            </FooterContainer>
        </MainContainer>
    );
};

export default memo(Footer);
