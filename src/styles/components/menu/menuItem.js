import styled from "styled-components";
import sizes from "../../media";

export const Item = styled.li`
  margin: auto;
  margin-bottom: 8px;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 12%;
    top: 50%;
    right: -12%;
    border: 1px solid ${(prop) => prop.borderColor};
  }

  &:before {
    content: "";
    position: absolute;
    width: 12%;
    top: 50%;
    left: -12%;
    border: 1px solid ${(prop) => prop.borderColor};
  }
`;

export const ClipWrapper = styled.div`
  width: 80vmin;
  height: 32px;
  position: relative;
  background-color: ${(prop) => prop.borderColor};
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0 50%);

  @media ${sizes.laptop} {
    width: 389px;
    height: 40px;
  }
`;

export const ClipInsideWrapper = styled.div`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(prop) => prop.color};
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;

  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0 50%);
`;

export const Price = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 116%;

  text-align: center;
  color: ${(prop) => prop.txtColor};
`;
