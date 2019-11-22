import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";
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

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);