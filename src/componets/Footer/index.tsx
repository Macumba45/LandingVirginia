import { FC, memo, useCallback } from "react";
import SendIcon from '@mui/icons-material/Send';
import {
    TtitleFooter,
    MainContainer,
    Copyrights,
    WebLink,
} from "./style";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Footer: FC = () => {

    const navigate = useNavigate()

    const contactMe = useCallback(() => {

        navigate('/contacto')
    }, []);

    return (
        <MainContainer>
            <TtitleFooter>Contáctame para más información:</TtitleFooter>
            <Button
                onClick={contactMe}
                sx={{ width: '300px', height: '50px', margin: '2rem auto', backgroundColor: '#E1226B', color: '#fff', '&:hover': { backgroundColor: '#6c032b', color: '#ffffff' } }}
                variant="contained"
                endIcon={<SendIcon />}
            >
                Cambia tu futuro
            </Button>
            <Copyrights>
                <WebLink href="https://virginiahidalgo.es">virginiahidalgo.es</WebLink>
                .&nbsp;Copyright 2023.&nbsp;All Rights Reserved.
            </Copyrights>
        </MainContainer>
    );
};

export default memo(Footer);
