/* eslint-disable no-nested-ternary */
import React from "react";
import propTypes from "prop-types";

import {
  ClipWrapper,
  ClipInsideWrapper,
  Item,
  Price,
} from "../../styles/components/menu/menuItem";

import colors from "../../styles/theme";

const MenuListItem = ({ price, passed, active }) => {
  const currency = "$";
  return (
    <div>
      <Item
        borderColor={
          active ? colors.menuItemActiveColor : colors.menuItemBorderColor
        }
      >
        <ClipWrapper
          borderColor={
            active ? colors.menuItemActiveColor : colors.menuItemBorderColor
          }
        >
          <ClipInsideWrapper color="white">
            <Price
              txtColor={() => {
                if (active) return colors.menuItemActiveColor;
                return passed
                  ? colors.menuItemPassedTxtColor
                  : colors.menuItemInactiveTxtColor;
              }}
            >
              {currency}
              {price}
              {passed}
            </Price>
          </ClipInsideWrapper>
        </ClipWrapper>
      </Item>
    </div>
  );
};

MenuListItem.defaultProps = {
  price: "0",
  passed: false,
  active: false,
};

MenuListItem.propTypes = {
  price: propTypes.string,
  passed: propTypes.bool,
  active: propTypes.bool,
};

export default MenuListItem;
