import { FC, memo } from "react";
import { MainContainer } from "./style";
import NavBar from "../componets/NavBar";
import Footer from "../componets/Footer";
import Video from "../componets/Video";

const Landing: FC = () => {


    return (

        <MainContainer>
            <NavBar />
            <Video />
            <Footer />
        </MainContainer>
    )
}



export default memo(Landing)