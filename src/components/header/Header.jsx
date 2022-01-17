import React from "react";
import LeftSide from "./header/LeftSide";
import RightSide from "./header/RightSide";

import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <LeftSide />
      <RightSide />
    </StyledHeader>
  );
};

export default Header;
