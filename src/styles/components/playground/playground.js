import styled from "styled-components";
import { List } from "../../base";
import sizes from "../../media";

export const Wrapper = styled.div`
  display: ${(prop) => prop.isMenuOpen};
  flex-direction: column;
  align-items: center;

  @media ${sizes.laptop} {
    display: flex;
    width: 70%;
    align-items: flex-start;
    padding-left: 80px;
  }
`;

export const QuestionsList = styled(List)`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${sizes.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 70%;

    margin: 0;
  }
`;

export const Question = styled.p`
  width: 80%;

  text-align: left;
  margin: 0;
  margin-bottom: 17%;

  font-family: "Inter";
  font-size: 1.3em;

  @media ${sizes.laptop} {
    margin-bottom: 105px;
  } ;
`;
