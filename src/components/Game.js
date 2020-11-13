import { Component } from "react";
import styled from "styled-components";
import uniqid from "uniqid";
// import MediaQuery from "react-responsive";
import propTypes from "prop-types";

import PlayGround from "./playground/PlayGround";
import Menu from "./menu/Menu";

import questionsJSON from "../assets/json/questions.json";
import pricesJSON from "../assets/json/prices.json";
import openMenuImg from "../assets/images/OpenMenu.png";
import closeMenuImg from "../assets/images/CloseMenu.png";

import sizes from "../styles/media";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(prop) => prop.theme.colors.gameBackground};

  position: relative;

  @media ${sizes.laptop} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonMenuOpen = styled.button`
  outline: none;
  border: none;
  background-color: transparent;

  width: 20px;
  height: 20px;

  position: absolute;
  top: 15px;
  right: 15px;

  background-image: url(${(prop) => prop.isMenuOpen});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${sizes.laptop} {
    display: none;
  } ;
`;

class Game extends Component {
  questions = [];

  prices = [];

  state = {
    index: 0,
    totalRight: 0,
    isMenuOpen: false,
  };

  // LifeCicle

  componentDidMount() {
    const questionsLocal = this.getQuestionsLocal();
    this.addQuestions(
      questionsLocal && questionsLocal.length > 0
        ? questionsLocal
        : questionsJSON
    );
    this.setPrices(pricesJSON);
    this.setStateFromLocal();
  }

  // Logic

  setPrices = (prices = []) => {
    this.prices = prices;
  };

  setIndex = (max = 0) => {
    this.setState({
      index: Math.floor(Math.random() * Math.floor(max)),
    });
  };

  setPrices = (prices = []) => {
    this.prices = prices;
  };

  saveToLocal = (
    { index: currentIndex = 0, totalRight: curentTota = 0 },
    questions = []
  ) => {
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("currentTotal", curentTota);
    localStorage.setItem("questions", JSON.stringify(questions));
  };

  getQuestionsLocal = () => JSON.parse(localStorage.getItem("questions"));

  setStateFromLocal = () => {
    const currentIndex = parseInt(localStorage.getItem("currentIndex"), 10);
    const currentTotal = parseInt(localStorage.getItem("currentTotal"), 10);
    if (currentIndex && currentTotal) {
      this.setState({
        index: currentIndex,
        totalRight: currentTotal,
      });
    }
  };

  addQuestions = (newQuestions = []) => {
    this.questions = [
      ...this.questions,
      ...newQuestions.map((item) => ({
        ...item,
        id: uniqid("q-"),
      })),
    ];
    this.setIndex(this.questions.length);
  };

  isEnded = (total) => {
    const { onEnd } = this.props;
    if (total + 1 === this.prices.length || this.questions.length === 0) {
      onEnd(this.prices[total + 1]);
      this.saveToLocal({}, []);
      return true;
    }
    return false;
  };

  onOpenCLoseMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  // Handlers

  answerClickHandle = (isRight) => {
    const { index, totalRight } = this.state;
    const { onEnd } = this.props;

    if (this.isEnded(totalRight)) return;

    if (isRight) {
      this.questions.splice(index, 1);
      this.setIndex(this.questions.length);
      this.setState({ totalRight: totalRight + 1 });
      this.saveToLocal(this.state, this.questions);
    } else {
      this.saveToLocal({}, []);
      onEnd(this.prices[totalRight - 1]);
    }
  };

  // Render

  render() {
    const { index, totalRight, isMenuOpen } = this.state;

    return (
      <Wrapper>
        {/* <MediaQuery minDeviceWidth={320}> */}
        <ButtonMenuOpen
          onClick={this.onOpenCLoseMenu}
          isMenuOpen={isMenuOpen ? closeMenuImg : openMenuImg}
        />
        <Menu
          totalRight={totalRight}
          prices={this.prices}
          current={totalRight - 1}
          isMenuOpen={isMenuOpen}
        />
        {this.questions.length > 0 && (
          <PlayGround
            question={this.questions[index]}
            onAnswerClick={this.answerClickHandle}
            isMenuOpen={isMenuOpen}
          />
        )}
        {/* </MediaQuery> */}
      </Wrapper>
    );
  }
}

Game.propTypes = {
  onEnd: propTypes.func.isRequired,
};

export default Game;
