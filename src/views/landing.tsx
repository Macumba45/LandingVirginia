import { FC, memo } from "react";
import NavBar from "../componets/NavBar";
import Video from "../componets/Video";
import { LandingContainer } from "./styles";
import Footer from "../componets/Footer";

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <Video />
            <Footer />
        </>
    );
};

export default memo(Landing);
