import React from "react";
import ticketChatSvg from "../../../svg/ticketChat.svg";
import { StyledPriceListComponentRight } from "./PriceListRight.styles";

const PriceListRight = () => {
  return (
    <StyledPriceListComponentRight>
      <img src={ticketChatSvg} alt="Icon of envelope" />
      <h1>Ticket+Chat</h1>
      <p>For Medium-sized Businesses and Professional Agencies</p>
      <h2>29$ / mo</h2>
      <button>Try It</button>
    </StyledPriceListComponentRight>
  );
};

export default PriceListRight;
