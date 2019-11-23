import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "./store";
import App from "./App";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const issues = Array.from({ length: 50 }, (v, i) => ({
  id: i,
  name: `issue ${i}`,
  description: lorem.generateParagraphs(1 + Math.trunc(Math.random() * 10))
}));

const preloadedState = Object.freeze({
  issues
});

const { store, history } = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
