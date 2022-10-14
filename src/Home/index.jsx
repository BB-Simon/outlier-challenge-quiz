import React, { useState, useEffect } from 'react';
import {clsx} from 'clsx';
import { Button, NextQuestionCTA } from '../components';
import Progressbar, { ScoreProgressbar } from '../components/Progressbar';
import RatingStar from '../components/RatingStars';
import questionsJsonData  from '../questions.json'
import { getRandomInt } from '../utils/getRandomInt';
import { getPercentage } from '../utils/getPercentage';
import { EASY, HARD, MEDIUM } from '../utils/constants';
import { useJson } from '../hooks';
import { QuizWrapper } from './styles';


const Quiz = () => {
  const [questions] = useJson(questionsJsonData);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [difficulty, setDifficulty] = useState(new Set())
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)
  const [score, setScore] = useState(0)
  const [possibleMinScore, setPossibleMinScore] = useState(0)
  const [possibleMaxScore, setPossibleMaxScore] = useState(100)
  const [result, setResult] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])

  const [selected, setSelected] = useState(null)
  const [correct, setCorrect] = useState(null)
  const [isItemSelected, setIsItemSelected] = useState(false)
  const [showNextQuestionBtn, setShowNextQuestionBtn] = useState(false)

  
  const questionsloaded = questions.length && questions.length > 0;
  const totalQuestions = questions.length;
  const category = questionsloaded && questions[currentQuestion].category
  const question = questionsloaded && questions[currentQuestion].question
  const incorrectAnswers = questionsloaded && questions[currentQuestion].incorrect_answers
  const correctAnswer = questionsloaded && questions[currentQuestion].correct_answer
  const questionDifficulty = questionsloaded && questions[currentQuestion].difficulty
  const progressPercentage = getPercentage((currentQuestion + 1), totalQuestions)

  useEffect(() => {
    if(questionDifficulty === EASY){
      setDifficulty(new Set([1]))
    } else if(questionDifficulty === MEDIUM){
      setDifficulty(new Set([1, 2]))
    } else if(questionDifficulty === HARD){
      setDifficulty(new Set([1, 2, 3]))
    }

    if(incorrectAnswers.length){
      incorrectAnswers.splice(getRandomInt(incorrectAnswers.length), 0, correctAnswer);
      setAnswers([...incorrectAnswers])
    }
  }, [currentQuestion, questionDifficulty, correctAnswer, incorrectAnswers])

  useEffect(() => {
    if(answeredCount > 0){
      const remaining = totalQuestions - answeredCount
      const possibleCorrectAnswerCount = correctAnswerCount + remaining
      setPossibleMinScore(getPercentage(correctAnswerCount, totalQuestions))
      setPossibleMaxScore(getPercentage(possibleCorrectAnswerCount, totalQuestions))
      setScore(getPercentage(correctAnswerCount, answeredCount))
    }
  }, [answeredCount, correctAnswerCount, totalQuestions])
  
  const handleSelectAnAnswer = (an, i) => {
    setSelected(i)
    setIsItemSelected(true);
    setAnsweredCount(answeredCount + 1)
    setCorrect(answers.indexOf(correctAnswer));
    
    if(an === correctAnswer) {
      setCorrectAnswerCount(correctAnswerCount  + 1)
      setResult("Correct!")
    } else {
      setResult("Sorry!")
      setIncorrectAnswerCount(incorrectAnswerCount + 1)
    }
    if(currentQuestion !== (totalQuestions - 1)){
      setShowNextQuestionBtn(true);
    }
    setShowResult(true);
  }

  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setIsItemSelected(false)
    setShowNextQuestionBtn(false);
    setResult("")
  }
  
  const getClassName = (i) => {
    return clsx('', {
      'selected': i === selected,
      'correct': i === correct,
      'disabled': i !== selected && i !== correct,
    });
  }

  if(!questionsloaded) {
    return <p>Loading...</p>
  }

  return  (
    <QuizWrapper>
      <Progressbar percentage={progressPercentage} /> 
      <main className="container">
        <div className="container-content">
          <h1 className="title">Question {currentQuestion + 1} of {totalQuestions}</h1>
          <p className="category">{category}</p>
          <RatingStar difficulty={difficulty} />
          <h2 className="question">{question}</h2>
          <ul className="optionsWrapper">
            {answers && answers.map((a, i) => (
              <li key={i}>
                <Button
                  title={a}
                  className={`btn ${isItemSelected ? getClassName(i) : ""}`}
                  onClick={() => handleSelectAnAnswer(a, i)}
                  disabled={isItemSelected}
                />
              </li>
            ))}
          </ul>
          {showResult && <h3 className="result">{result}</h3>}
          {showNextQuestionBtn && (
            <NextQuestionCTA 
              handleOnClick={goToNextQuestion} 
              className="next-question-btn" 
            />
          )}
        </div>
        <ScoreProgressbar 
          score={score} 
          minScore={possibleMinScore} 
          maxScore={possibleMaxScore} 
        />
      </main>
    </QuizWrapper>
  )
}

export default Quiz

