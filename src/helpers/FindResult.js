
export const findResult = (correctWord, word, errorNum) => {
  if(correctWord === word) { 
    return "Congrats You won!";
  } else if(correctWord !== word && errorNum === 6) {
    return "You are A looser";
  } else {
    return null;
  }
}