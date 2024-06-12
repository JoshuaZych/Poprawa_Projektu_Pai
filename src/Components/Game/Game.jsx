import { createContext, useState } from "react";
import Illustration from "../Illustration/Illustration";
import Keyboard from "../Keyboard/Keyboard";
import ResetButton from "../resetButton/resetButton";
import WordDisplay from "../wordDisplay/wordDisplay";
import words from "../../resources/Words.json";

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex]["word"];
};

const GameContext = createContext();

const Game = (props) => {
  const [randomWord, setRandomWord] = useState(getRandomWord());
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [failedAttempts, setFaildAttempts] = useState(0);

  const onResetClicked = () => {
    setRandomWord(getRandomWord());
    setSelectedLetters([]);
    setFaildAttempts(0);
  };

  const onLetterSelected = (letter) => {
    if (selectedLetters.includes(letter)) {
      return;
    }
    setSelectedLetters([...selectedLetters, letter]);
    if (!randomWord.includes(letter)) {
      setFaildAttempts(failedAttempts + 1);
    }
  };

  const checkIfWordIsGuessed = () => {
    return randomWord
      .split("")
      .every((letter) => selectedLetters.includes(letter));
  };

  return (
    <GameContext.Provider
      value={{ randomWord, selectedLetters, failedAttempts }}
    >
      <h1>Gra w wisielca</h1>
      <Illustration />
      {checkIfWordIsGuessed() && (
        <div>
          <h2>Gratulacje, zgadłeś hasło!</h2>
          Słowo to: {randomWord}
        </div>
      )}
      {failedAttempts === 10 && (
        <div>
          <h2>Przegrałeś!</h2>
          Słowo to: {randomWord}
        </div>
      )}
      <WordDisplay randomWord={randomWord} selectedLetters={selectedLetters} />
      <Keyboard
        onLetterSelected={onLetterSelected}
        selectedLetters={selectedLetters}
      />
      <br />
      <ResetButton onResetClicked={onResetClicked} />
    </GameContext.Provider>
  );
};
export { Game, GameContext };
