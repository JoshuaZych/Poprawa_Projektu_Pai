import { useContext } from "react";
import { GameContext } from "../Game/Game";

const hangmanParts = [
  { x1: 62, y1: 70, x2: 56, y2: 56 },
  { x1: 50, y1: 70, x2: 56, y2: 56 },
  { x1: 68, y1: 46, x2: 56, y2: 40 },
  { x1: 44, y1: 46, x2: 56, y2: 40 },
  { x1: 56, y1: 40, x2: 56, y2: 56 },
  { x1: 56, y1: 16, x2: 56, y2: 28 },
  { x1: 24, y1: 24, x2: 32, y2: 16 },
  { x1: 21, y1: 16, x2: 60, y2: 16 },
  { x1: 24, y1: 80, x2: 24, y2: 16 },
  { x1: 16, y1: 80, x2: 32, y2: 80 },
];

const Illustration = () => {
  const { failedAttempts } = useContext(GameContext);
  return (
    <div className="illustration">
      <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
        <circle
          className="part"
          cx="56"
          cy="34"
          r="6"
          stroke={"white"}
          fill="transparent"
        ></circle>
        {hangmanParts.map(({ x1, y1, x2, y2 }, index) => (
          <line
            key={index}
            className="part"
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={index < failedAttempts ? "red" : "white"}
          />
        ))}
      </svg>
    </div>
  );
};

export default Illustration;
