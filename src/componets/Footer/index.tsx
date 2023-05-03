import { FC, memo, useCallback } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { TtitleFooter, MainContainer, Copyrights, WebLink } from "./style";

const Footer: FC = () => {
  const navigate = useNavigate();

  const contactMe = useCallback(() => {
    navigate("/contacto");
  }, [navigate]);

  return (
    <MainContainer>
      {/* <TtitleFooter>Contáctame para más información:</TtitleFooter> */}
      <Button
        href="https://calendly.com/carol_cd/30min"
        // onClick={contactMe}
        sx={{
          fontFamily: "montserrat",
          width: "350px",
          height: "50px",
          margin: "2rem auto",
          backgroundColor: "#E1226B",
          color: "#fff",
          "&:hover": { backgroundColor: "#6c032b", color: "#ffffff" },
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Agenda tu Consultoría GRATUITA
      </Button>
      <Copyrights>
        <WebLink href="https://virginiahidalgo.es">virginiahidalgo.es</WebLink>
        .&nbsp;Copyright 2023.&nbsp;All Rights Reserved.
      </Copyrights>
    </MainContainer>
  );
};

export default memo(Footer);
