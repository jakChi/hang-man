import React from "react";

function WrongLetters({ wrongLetters}) {
  
  return (
    <div className="wrong-letters-container">
      <p>Wrong Letters Used:</p>
      <ol className="wrong-letters-ol">
        {
          wrongLetters.map((letter, index) => (
            <li key={index}>{letter},</li>
          ))
        }
      </ol>
    </div>
  )
}

export default WrongLetters

