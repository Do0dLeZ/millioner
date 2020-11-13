import React, { useEffect, useState } from "react";
import propType from "prop-types";

// Styles

import colors from "../../styles/theme";
import {
  Item,
  ClipWrapper,
  Button,
  AnswerTxt,
  Letter,
  ClipInsideWrapper,
} from "../../styles/components/playground/questionItem";

// eslint-disable-next-line object-curly-newline
const ListItem = ({ answer, index, onAnswerClick, state }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let timeout;
    if (isClicked) {
      timeout = setTimeout(() => {
        onAnswerClick(index);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  });

  const getLetter = (itemIndex) => {
    switch (itemIndex) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      default:
        return "No";
    }
  };

  const setColor = (currentState, right, wrong, inactive, clicked) => {
    if (isClicked) {
      return clicked;
    }
    switch (currentState) {
      case -1:
        return inactive;
      case 1:
        return right;
      case 0:
        return wrong;
      default:
        return inactive;
    }
  };

  return (
    <Item
      color={setColor(
        state,
        colors.itemRightAnswer,
        colors.itemWrongAnswer,
        colors.itemActiveBorderColor,
        colors.itemClickedBorderColor
      )}
    >
      <ClipWrapper
        color={setColor(
          state,
          colors.itemRightAnswer,
          colors.itemWrongAnswer,
          colors.itemActiveBorderColor,
          colors.itemClickedBorderColor
        )}
      >
        <ClipInsideWrapper
          color={setColor(
            state,
            colors.itemRightBackgroundColor,
            colors.itemWrongBackgroundCOlor,
            "white",
            colors.itemClickedColor
          )}
        >
          <Button
            as="a"
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setIsClicked(true);
            }}
          >
            <AnswerTxt>
              <Letter color={colors.itemLetterColor}>{getLetter(index)}</Letter>
              {answer}
            </AnswerTxt>
          </Button>
        </ClipInsideWrapper>
      </ClipWrapper>
    </Item>
  );
};

ListItem.propTypes = {
  answer: propType.string.isRequired,
  index: propType.number.isRequired,
  onAnswerClick: propType.func.isRequired,
  state: propType.number.isRequired,
};

export default ListItem;
