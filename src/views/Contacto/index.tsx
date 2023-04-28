import { FC, memo } from "react";
import NavBar from "../../componets/NavBar";
import Video from "../../componets/Video";
import Footer from "../../componets/Footer";
import FormContact from "../../componets/Formulario"

const Contacto: FC = () => {
    return (
        <>
            <FormContact />
        </>
    );
};

export default memo(Contacto);
