const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = (props) => {
  const { onLetterSelected, selectedLetters } = props;

  return (
    <div>
      <h2>Klawiatura</h2>
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "400px" }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => onLetterSelected(letter)}
            disabled={selectedLetters.includes(letter)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedLetters.includes(letter)
                ? "grey"
                : "white",
              color: selectedLetters.includes(letter) ? "white" : "black",
              cursor: selectedLetters.includes(letter)
                ? "not-allowed"
                : "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Keyboard;
