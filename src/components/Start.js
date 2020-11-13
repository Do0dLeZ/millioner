import React from "react";
import propTypes from "prop-types";

import {
  Wrapper,
  ColoredBackgroundTriangle,
  ContentWrapper,
  FingerIcon,
  StartTitle,
  Button,
} from "../styles/components/start";

const Start = ({ onStart }) => (
  <Wrapper>
    <ColoredBackgroundTriangle />
    <ContentWrapper>
      <FingerIcon />
      <StartTitle>Who wants to be a millionaire?</StartTitle>
      <Button type="button" onClick={onStart}>
        Start
      </Button>
    </ContentWrapper>
  </Wrapper>
);

Start.propTypes = {
  onStart: propTypes.func.isRequired,
};

export default Start;
