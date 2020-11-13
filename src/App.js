import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import GlobalFonts from "./styles/fonts";

import Start from "./components/Start";
import Game from "./components/Game";
import End from "./components/End";

import colors from "./styles/theme";

const theme = { colors: { ...colors } };

export default class App extends Component {
  state = {
    isStarted: false,
    isEnded: false,
    prise: 0,
  };

  // LifeCicle

  componentDidMount() {
    const started = localStorage.getItem("isStarted") === "true";
    const ended = localStorage.getItem("isEnded") === "true";
    if (started) {
      this.setState({ isStarted: started, isEnded: ended });
    }
  }

  // Handlers

  handleStart = () => {
    this.setState({ isStarted: true });
    localStorage.setItem("isStarted", true);
    localStorage.setItem("isEnded", false);
  };

  handleRepeat = () => {
    this.setState({ isEnded: false, prise: 0, isStarted: true });
    localStorage.setItem("isStarted", true);
    localStorage.setItem("isEnded", false);
  };

  handleEnd = (totalPrise = 0) => {
    this.setState({ isEnded: true, prise: totalPrise, isStarted: false });
    localStorage.setItem("isStarted", false);
    localStorage.setItem("isEnded", true);
  };

  // Render

  render() {
    const { isStarted, isEnded, prise } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <Normalize />
        {isStarted && <Game onEnd={this.handleEnd} />}
        {isEnded && <End prise={prise} onRepeat={this.handleRepeat} />}
        {!isStarted && !isEnded && <Start onStart={this.handleStart} />}
      </ThemeProvider>
    );
  }
}
