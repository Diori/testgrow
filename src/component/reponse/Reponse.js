import React from "react";
import "./Reponse.css";

const Reponse = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={
        props.correctAnswer === qAnswer
          ? "correcte"
          : props.clickedAnswer === qAnswer
          ? "incorrecte"
          : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <>
      <ul disabled={props.clickedAnswer ? true : false} className="Answers">
        {answers}
      </ul>
      <div>
        {props.correctAnswer
          ? "Réponse correct!"
          : props.clickedAnswer
          ? "Réponse Incorrect!"
          : ""}
      </div>
    </>
  );
};

export default Reponse;
