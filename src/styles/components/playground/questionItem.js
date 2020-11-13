import styled from "styled-components";
import sizes from "../../media";

export const Item = styled.li`
  margin: auto;
  margin-bottom: 25px;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 12%;
    top: 50%;
    right: -12%;
    border: 1px solid ${(prop) => prop.color};
  }

  &:before {
    content: "";
    position: absolute;
    width: 12%;
    top: 50%;
    left: -12%;
    border: 1px solid ${(prop) => prop.color};
  }
`;

export const ClipWrapper = styled.div`
  width: 80vmin;
  height: 56px;
 
  background-color: ${(prop) => prop.color};

   position: relative;
  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0 50%);

  @media ${sizes.laptop} {
    width: 389px;
    height: 72px;
  }
`;

export const ClipInsideWrapper = styled.div`
  outline: none;
  border: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${(prop) => prop.color};
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;
  bottom: 1px;

  clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0 50%);
`;

export const Button = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 116%;
`;

export const AnswerTxt = styled.p``;

export const Letter = styled.span`
  margin-left: 30px;
  margin-right: 10px;
  color: ${(prop) => prop.color};
`;
