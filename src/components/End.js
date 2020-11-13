import React from "react";
import propTypes from "prop-types";

import {
  Wrapper,
  ContentWrapper,
  FingerIconEnd,
  Title,
  Won,
  Button,
  TextWrapper,
} from "../styles/components/end";

const End = ({ onRepeat, prise }) => (
  <Wrapper>
    <ContentWrapper>
      <FingerIconEnd />
      <TextWrapper>
        <Title>Congradulations!</Title>
        <Won>{`You won: ${prise}`}</Won>
        <Button type="button" onClick={onRepeat}>
          Try again
        </Button>
      </TextWrapper>
    </ContentWrapper>
  </Wrapper>
);

End.propTypes = {
  onRepeat: propTypes.func.isRequired,
  prise: propTypes.string.isRequired,
};

export default End;
