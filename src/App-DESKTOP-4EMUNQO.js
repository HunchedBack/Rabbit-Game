import React, {useState, useEffect} from 'react';
import './App.css';
import {questions} from './questions'
import rabbit from "../src/resources/rabbit.png"
import wolf from "../src/resources/wolf.png";

const newArray =questions.sort((a,b) => 0.5 - Math.random())
function App() {

  const [showfinalResults, setfinalResults] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [gameStage, setgameStage] =useState(0)
  const [gameDisplay, setGameDisplay] = useState()
  const [gameOver, setGameOver] = useState(false)
  
  
  
  
  useEffect(() => {
      console.log(gameStage)
      if (gameStage===0) {  setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300" />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div>
                      <img className="w-16" src={rabbit} alt="rabbit" />
                    </div>
                  </div>
      )
      }
      if (gameStage===1) { setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div>
                      <img className="w-16" src={rabbit} alt="rabbit" />
                    </div>
                  </div>
      )
      }
      if (gameStage===2) { setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div>
                      <img className="w-16" src={rabbit} alt="rabbit" />
                    </div>
                  </div>
      )
      }
      if (gameStage===3) { setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div>
                      <img className="w-16" src={rabbit} alt="rabbit" />
                    </div>
                  </div>
      )
      }
      if (gameStage===4) { setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div>
                      <img className="w-16" src={rabbit} alt="rabbit" />
                    </div>
                  </div>
      )
      }
      if (gameStage===5) { setGameDisplay(
        <div className=" flex flex-row items-center m-4 ">
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="mt-6 mr-6 h-8 w-8 bg-gray-300 rounded-full"></div>
                    <hr className="mt-6 mr-6 w-10 border-2 border-gray-300 " />
                    <div className="m-4" >
                      <img className="w-16 mr-4" src={wolf} alt="wolf" />
                    </div>
                  </div>
      )
      }  
      
    

  }, [gameStage]) 
  // useEffect(() => {

  // }, [gameDisplay])
  
  
  
  



  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(1);
    setfinalResults(false);
    setGameOver(false)
    setgameStage(0)
  }

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score +1);
      
    }
    
    if (!isCorrect) {
      setgameStage(gameStage+1);
      
      
    }

    if (currentQuestion +1 <=10 ) {
      setCurrentQuestion(currentQuestion +1);
    }
    else {
      setfinalResults(true);
      
    }
    if (gameStage===4) {
      setfinalResults(true);
      setGameOver(true);
    }
  }
/** 
useEffect(() => {
  setGameOver(
  <h1 className='text-center text-white text-4xl font-medium'>
    You have failed to save Sergant Carrots
  </h1>
)
}, [gameStage])  

useEffect(() => {
  setGameWon(
  <h1 className='text-center text-white text-4xl font-medium'>
    You have saved Sergant Carrots🎉🎉🎉
  </h1>
)
}, [currentQuestion])
*/

console.log(newArray)

  return (
     
              
      <div className="antialised bg-gradient-to-r from-purple-400 to-blue-500 h-screen">
          <div className='flex w-full h-screen justify-center items-center'>
              <div className='w-full max-w-3xl'>
              <p className="text-5xl font-bold mt-8 text-center">
                Save Sergeant Whiskers from the BIG BAD WOLF!
              </p>
              {gameDisplay}

              

                {showfinalResults ? (
                <div className='bg-fuchsia-600 border border-black mt-4 rounded-lg shadow-lg'>
                  {gameOver ? (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have failed to save Sergant Carrots
                  </h1>
                  ): (
                    <h1 className='text-center text-white text-4xl font-medium'>
                    You have saved Sergant Carrots🎉🎉🎉
                    </h1>
                  )}
                <h2 className='text-center text-white text-3xl font-mediums'>
                {score} out of 10 correct - ({(score/10)*100}%)
                </h2>
                <div className='flex w-full h-full justify-center items-center'>
                <button className='border border-black rounded-lg shadow-lg bg-red-700 px-9 py-3 text-center my-9 text-white' onClick={() => restartGame()}>Restart Game</button>
                </div>
                </div>
               ) : (
              <div className= ' bg-purple-600 p-12 rounded-lg shadow-lg w-full h-4/5 mt-5 '>
              <div className='items-center '>
                <p className='text-center text-slate-200 font-medium text-4xl'>Question {currentQuestion} out of 10 </p>
                  <h3 className='text-center text-gray-800 font-medium text-2xl '> {newArray[currentQuestion-1].text} </h3>

                  <ul >
                    {newArray[currentQuestion-1].options.map((option) => {
                    return (
                      <li className='bg-fuchsia-600 mt-3 border border-violet-700 rounded-lg shadow-lg text-lg text-white px-9 py-3 text-center' onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}</li>
                      );
                    })}
                  </ul>
              </div>
              </div>
              
               )}
               
              </div>
               
          
              </div>
              </div>
              
  );
                  }

export default App;
