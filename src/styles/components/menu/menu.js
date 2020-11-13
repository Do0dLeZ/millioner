import styled from "styled-components";
import { List } from "../../base";
import sizes from "../../media";

export const MenuList = styled(List)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  @media ${sizes.laptop} {
    height: 100vh;
  } ;
`;

export const Wrapper = styled.div`
  display: ${(prop) => prop.isMenuOpen};
  justify-content: center;

  @media ${sizes.laptop} {
    display: flex;
    width: 25%;
    display: block;
    background-color: white;
    padding-right: 1px;
  } ;
`;
