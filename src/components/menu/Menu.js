import React from "react";
import propTypes from "prop-types";
import uniqid from "uniqid";

import MenuListItem from "./MenuListItem";

import { MenuList, Wrapper } from "../../styles/components/menu/menu";

const Menu = ({ totalRight, prices, isMenuOpen }) => {
  let current = 0;

  const isPassed = () => {
    const passed = current < totalRight;
    current += 1;
    return passed;
  };

  const isActivePrice = () => current === totalRight;

  return (
    <Wrapper isMenuOpen={isMenuOpen ? "flex" : "none"}>
      <MenuList>
        {prices.map((price) => (
          <MenuListItem
            key={uniqid()}
            price={price}
            active={isActivePrice()}
            passed={isPassed()}
          />
        ))}
      </MenuList>
    </Wrapper>
  );
};

Menu.defaultProps = {
  prices: [],
};

Menu.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
  prices: propTypes.arrayOf(propTypes.string),
  totalRight: propTypes.number.isRequired,
};

export default Menu;
