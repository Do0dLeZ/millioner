import styled from "styled-components";
import { FingerIcon } from "../base";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  font-size: 16px;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FingerIconEnd = styled(FingerIcon)`
  margin-bottom: 0;
`;

export const Won = styled.h3`
  font-family: "Inter";
  font-size: 1.5em;
  /* text-align: center; */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export { Title, Button } from "../base";
