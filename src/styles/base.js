import styled from "styled-components";
import sizes from "./media";

import icon from "../assets/images/finger-stars.svg";

export const FingerIcon = styled.div`
  width: 100%;
  min-height: 192px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: center;

  margin-bottom: 24px;

  @media ${sizes.laptop} {
    width: 624px;
    height: 367px;
    display: inline;
    float: left;
  }
`;

export const Title = styled.h2`
  width: 100%;

  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  line-height: 116%;

  @media ${sizes.laptop} {
    width: 380px;
    font-size: 3.5em;
    text-align: left;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 16px 24px;
  text-align: center;

  font-family: "Inter";
  font-size: 1em;
  font-weight: normal;
  color: ${(prop) => prop.theme.colors.primeryTxt};

  background-color: ${(prop) => prop.theme.colors.inactive};

  border: none;
  border-radius: 8px;

  @media ${sizes.laptop} {
    display: block;
    height: 64px;
    font-size: 1.5em;
    width: 296px;
    /* margin: auto; */
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
