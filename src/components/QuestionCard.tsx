import React from "react";
import styled from "styled-components";
import { AnswerObject } from "../App";

const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .answers-grid {
    display: grid;
    border: 1px green solid;
    grid-template-columns: 250px 250px;

    grid-gap: 10px;
    width: 90%;
    justify-content: space-evenly;
    .selections {
      /* width: 80vw; */
      width: 100%;
      height: 100%;
      padding: 20px 40px;
      border-radius: 10px;
      background: #baae97;
      color: black;
      transition: 300ms;
      &:hover {
        background: #615e59;
        color: #e9ddcb;
        transform: scale(1.1);
      }
    }
  }
`;

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Container>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>

      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="answers-grid">
        {answers.map((answer) => (
          <div key={answer}>
            <button className="selections" disabled={!!userAnswer} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default QuestionCard;
