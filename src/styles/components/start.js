import styled from "styled-components";
import sizes from "../media";
import { Title } from "../base";

export const Wrapper = styled.div`
  position: relative;
  font-size: 16px;
`;

export const ColoredBackgroundTriangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 100vh 100vw;
  border-color: transparent transparent
    ${(prop) => prop.theme.colors.backgroundOrange} transparent;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  @media ${sizes.laptop} {
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StartTitle = styled(Title)`
  margin-bottom: 104px;
`;

export { FingerIcon, Button } from "../base";
