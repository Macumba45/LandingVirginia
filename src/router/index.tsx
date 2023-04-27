import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../views/landing";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);
