import React, { useEffect, useState } from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import { shownotif } from './helpers/Helper';
import Notification from './components/Notification';
import Popup from './components/Popup';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  
  //State of the component
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ notification, setNotification ] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.keyCode >= 65 && event.keyCode <= 90) {
        const letter = event.key.toLowerCase(); 
  
        if(!correctLetters.includes(letter)) {
          setCorrectLetters(correctLetters => [...correctLetters, letter]);
        } else {
          shownotif(setNotification);
        }
  
        if(!selectedWord.slice().split("").includes(letter)) {
          if(!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            shownotif(setNotification);
          }
        }
      }    
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ correctLetters, wrongLetters ]);


  return (
    <div className="App">
      <Header />
      <div className='game-container'>
        <Figure wrongLettersNum={wrongLetters.length} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Notification showing={notification} />
      <Popup 
      correctWord={selectedWord}
      wordLetters={correctLetters}
      errorNum={wrongLetters.length}
      />
    </div>
  );
}

export default App;
