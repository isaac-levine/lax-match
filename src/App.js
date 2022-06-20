import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>

function App() {

  var shortStick = false

  const firstQuestion = {
    questionText: "What type of stick do you use?",
    answerOptions: [
      "Short stick", "Long stick"
    ]
  }

  // Series of 6 questions that we ask once we know user is looking for a SHORT stick
  const shortStickQuestions = [
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
      answerOptions: ["Power dodge", "Speed dodge"]
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

  // Series of 5 questions that we ask once we know user is looking for a LONG stick
  const longStickQuestions = [
    {
      questionText: "What's your style of play?",
      answerOptions: ["Aggressive - Strip the ball", "Fundamental - Body position", "Outlet passes", "Creating transition"]
    }, 
    {
      questionText: "What's on your stat sheet?",
      answerOptions: ["Caused turnovers", "Ground balls", "Goals and assists", "Penality minutes"]
    },
    {
      questionText: "Where do you defend from?",
      answerOptions: ["Above GLE", "Below GLE"]
    }, 
    {
      questionText: "What's your favorite check to throw?",
      answerOptions: ["Wrap check", "V hold", "Body check", "Poke check"]
    }, 
    {
      questionText: "What defensive position do you play?",
      answerOptions: ["LSM", "Close defense"]
    }, 
  ]

  // state object to track which question we are on 
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false)

  // change to the next question
  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < shortStickQuestions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }



  return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>Based on your responses, the stick recommend is... </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/6
						</div>
						<div>{shortStickQuestions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{shortStickQuestions[currentQuestion].answerOptions.map((answerOptions) => 
            <button onClick={handleAnswerButtonClick}>{answerOptions}</button>)}
					</div>
				</>
			)}
		</div>
	);
}

export default App;
