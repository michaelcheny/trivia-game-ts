import React, { useState } from "react";
import { fetchQuizQs } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper, MainWrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    // add try catch and stuff
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQs(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      // check answer
      const correct = questions[number].correct_answer === answer;
      // + score for correct answer
      if (correct) setScore((prev) => prev + 1);
      // save answer in arr
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to nextq if not last
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <MainWrapper>
      <GlobalStyle />
      <Wrapper>
        <h1>Dundundunnnn</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button onClick={startTrivia} className="start">
            Start
          </button>
        ) : null}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next question
          </button>
        ) : null}
      </Wrapper>
    </MainWrapper>
  );
};

export default App;
