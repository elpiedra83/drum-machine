import React, { useEffect } from "react";

export default function Machine({ bank, setActualSound }) {
  useEffect(() => {
    document.addEventListener("keydown", pressedKey);
    return () => {
      document.removeEventListener("keydown", pressedKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAudio = () => {
    const theAudio = document.getElementById(bank.keyTrigger);
    const display = document.querySelector("#displaySound");
    theAudio.currentTime = 0;
    theAudio.play();
    setActualSound(bank.id);
    display.classList.toggle("exit");
    // setInterval(() => {
    //   // setActualSound("");
    //   display.classList.toggle("exit");
    // }, 1000);
  };

  const pressedKey = (e) => {
    if (e.keyCode === bank.keyCode) {
      playAudio();
    }
  };

  return (
    <button
      className="drum-pad"
      id={bank.id}
      onClick={playAudio}
      onKeyPress={pressedKey(bank.keyCode)}
    >
      <audio src={bank.url} className="clip" id={bank.keyTrigger}></audio>
      {bank.keyTrigger}
    </button>
  );
}
