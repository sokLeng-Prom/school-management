import { useState } from "react";
import { isNumber } from "../static/const";
export default function ScoreSheet() {
  const mockData = [
    "John",
    "Abe",
    "Susan",
    "Lucy",
    "Jeff",
    "Grace",
    "Einstein",
    "Ricky",
    "Morty",
    "Jord",
    "Karen",
    "Hora",
  ];
  const [scores, setScores] = useState(new Array(mockData.length));
  const clickHandler = () => {
    console.log(JSON.stringify(scores));
  };
  const renderStudentsScoreInput = mockData.map((name, index) => {
    return (
      <label title={name} key={index}>
        {name}
        <input
          type="text"
          required
          onChange={(e) => {
            if (isNumber(e.target.value)) {
              var newScores = scores;
              const newData = {
                [name]: !e.target.value ? 0 : parseInt(e.target.value),
              };
              newScores[index] = newData;
              setScores(newScores);
              console.log(e.target.parentElement.title);
              console.log(
                `newScore[${index}]: ${JSON.stringify(newScores[index])}`
              );
            }
          }}
        />
      </label>
    );
  });

  return (
    <div>
      {renderStudentsScoreInput}
      <button onClick={clickHandler}>Log Array</button>
    </div>
  );
}
