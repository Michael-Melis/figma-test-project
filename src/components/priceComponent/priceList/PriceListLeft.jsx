import React from "react";
import { StyledPriceListComponent, StyledH1 } from "./PriceList.styles";
import ticketSvg from "../../../svg/ticket.svg";

const PriceList = ({ svg, name, text, price }) => {
  return (
    <StyledPriceListComponent>
      <img src={ticketSvg} alt="Icon of envelope" />
      <h1>Ticket</h1>
      <p>For Small Businesses and Entrepreneurs</p>
      <h2>15$ / mo</h2>
      <button>Try It</button>
    </StyledPriceListComponent>
  );
};

export default PriceList;
