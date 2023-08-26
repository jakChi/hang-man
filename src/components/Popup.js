import React, { useEffect } from 'react'
import { findResult } from '../helpers/FindResult';

const Popup = ({correctWord, wordLetters, errorNum }) => {
  const fullWord = wordLetters.join("");
  const res = findResult(correctWord, fullWord, errorNum);
  let canPlay = true;

  useEffect(() => {
    if(res) {
      canPlay = false;
    }
  }, [res])
  

  return (
    <div className={"popup-container"} style={res && !canPlay ? {display: 'flex'} : {display: 'none'}}>
      <div className="popup">
        <h2>{res}</h2>
        <h3>{correctWord}</h3>
        <button onClick={() => {canPlay=true}}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup