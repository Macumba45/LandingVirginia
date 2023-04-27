import { FC, memo } from "react";
import { MainContainer, NavBarContent } from "./style";

const NavBar: FC = () => {
  return (
    <MainContainer>
      <NavBarContent>VIRGINIA HIDALGO</NavBarContent>
    </MainContainer>
  );
};

export default memo(NavBar);
