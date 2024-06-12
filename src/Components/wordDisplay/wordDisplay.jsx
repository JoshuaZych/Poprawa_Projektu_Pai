const WordDisplay = (props) => {
  const { selectedLetters, randomWord } = props;
  return (
    <div>
      <h2>Wybrane wcześniej litery</h2>
      {selectedLetters.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
      <h2>Aktualne słowo</h2>
      <div>
        {randomWord.split("").map((letter, index) => (
          <span key={index}>
            {selectedLetters.includes(letter) ? letter : "_ "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordDisplay;
