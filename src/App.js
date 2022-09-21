import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>

function App() {

  // Series of 6 questions that we ask
  const questions = [
    {
      questionText: "What's your style of play?",
      answerOptions: ["Feeder", "Dodger", "Finisher"]
    }, 
    {
      questionText: "What's on your stat sheet?",
      answerOptions: ["Goals", "Assists", "Even", "Groundballs"]
    },
    {
      questionText: "Where do you like to score from?",
      answerOptions: ["Inside moves", "Outside shots", "From feeds"]
    }, 
    {
      questionText: "What is your dodging style?",
      answerOptions: ["Power dodge", "Skill dodge", "Speed dodge"]
    }, 
    {
      questionText: "Where do you like to attack from?",
      answerOptions: ["X", "Crease", "Motion throughout the offensive zone", "GLE"]
    }, 
    {
      questionText: "What's your position?",
      answerOptions: ["Attack", "Midfield", "Both attack and midfield", "D Mid"]
    }
  ]


  // state object to track which question we are on 
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false)

  const [kinetikVote, setKinetikVote] = useState(0);
  const [kinetikAnswers, setKinetikAnswers] = useState(["Finisher", "Goals", "Outside shots", "Power dodge", "Attack", "Crease"]);

  const [hyperVote, setHyperVote] = useState(0);
  const [hyperAnswers, setHyperAnswers] = useState(["Feeder", "Assists", "Inside moves", "Speed dodge", "X", "Attack"]);

  const [evoVote, setEvoVote] = useState(0);
  const [evoAnswers, setEvoAnswers] = useState(["Dodger", "Even", "Feeds", "Skill dodge", "Both attack and midfield"]);

  const [winner, setWinner] = useState("None");

  // change to the next question
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1

    if (kinetikAnswers.includes(answerOption)) {
      setKinetikVote(kinetikVote+1);
    } else if (hyperAnswers.includes(answerOption)) {
      setHyperVote(hyperVote+1);
    } else if (evoAnswers.includes(answerOption)) {
      setEvoVote(evoAnswers+1);
    }

    if (kinetikVote >= hyperVote >= evoVote) {
      setWinner("Maverick Kinetick 2.0");
    } else if (hyperVote >= kinetikVote >= evoVote) {
      setWinner("STX Hyper Power");
    } else setWinner("Warrior Evo QX-O");


    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true)
    }

  }

  return (
		<div className='app'>
			{showResult ? (
				<div className='result-section'>Based on your responses, the stick recommend is: {winner}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/6
						</div>
						<div>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => 
            <button onClick={() => handleAnswerButtonClick(answerOption)}>{answerOption}</button>)}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
