import { FC, memo } from "react";
import { MainContainer, NavBarContainer } from "./style";


const NavBar: FC = () => {


    return (

        <MainContainer>
            <NavBarContainer>
                VIRGINIA HIDALGO
            </NavBarContainer>
        </MainContainer>

    )
}


export default memo(NavBar)