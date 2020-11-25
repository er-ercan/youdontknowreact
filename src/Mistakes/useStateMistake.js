import React, { useEffect, useState } from "react";
import MistakeContainer from "../Components/mistakeContainer";

const initialCountValue = () => {
  console.log(`%c useState Initial Value`, `color: #143f2a`);
  return 0;
};

function UseStateMistake() {
  const [counter, setCounter] = useState(initialCountValue);

  const obs = () => {
    window.localStorage.setItem("counter", counter);
  };

  useEffect(() => {
    obs();
  });

  useEffect(() => {
    JSON.parse(window.localStorage.getItem("counter"));
  }, []);

  let strCodeCorrect = `<button type='button' onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Inc Count</button>`;
  let strCodeWrong = `<button type='button' onClick={() => setCounter(() => counter + 1)}>Inc Count</button>`;

  return (
    <>
      <MistakeContainer
        header="useState() common Mistake"
        correctText={strCodeCorrect}
        wrongText={strCodeWrong}
        description="Comming Soon"
      >
        <button
          type="button"
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        >
          Inc Count
        </button>

        <div>{counter}</div>
      </MistakeContainer>
    </>
  );
}

export default UseStateMistake;
