import { FC, memo } from "react";
import { MainContainer, FooterContainer } from "./style";


const Footer: FC = () => {


    return (

        <MainContainer>
            <FooterContainer>
                ESTO ES EL FOOTER
            </FooterContainer>
        </MainContainer>

    )
}


export default memo(Footer)