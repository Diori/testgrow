import React, { Component } from "react";
import Reponse from "./reponse/Reponse";
import Question from "./question/Question";
import "./Quizz.css";

export default class Quizz extends Component {
  // initiating the local state
  state = {
    quiestions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: "What is the capital of Greece?",
      3: "What planet gave birth to Superman?",
    },
    answers: {
      1: {
        1: "Chicago",
        2: "New Orleans",
        3: "New York",
      },
      2: {
        1: "Athens",
        2: "Patras",
        3: "Kalamata",
      },
      3: {
        1: "Krypton",
        2: "Mars",
        3: "Saturn",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  // the method that checks the correct answer
  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
      this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <Reponse
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>Test Fini!</h1>
            <p>
              Votre score est: {score} sur {Object.keys(quiestions).length}
            </p>
            <p>Merci et à bientôt!</p>
          </div>
        )}
      </div>
    );
  }
}
