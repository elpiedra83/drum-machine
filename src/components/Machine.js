import React, { useEffect } from "react";

export default function Machine({ bank, setActualSound, powered, volume }) {
  useEffect(() => {
    document.addEventListener("keydown", pressedKey);
    return () => {
      document.removeEventListener("keydown", pressedKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAudio = () => {
    if (powered) {
      const audio = document.getElementById(bank.keyTrigger);
      const display = document.querySelector("#displaySound");
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
      setActualSound(bank.id);
      display.classList.toggle("exit");
    }
  };

  const pressedKey = (e) => {
    if (e.keyCode === bank.keyCode) {
      playAudio();
    }
  };

  return (
    <button
      className={powered ? "drum-pad" : "drum-pad off"}
      id={bank.id}
      onClick={playAudio}
      onKeyPress={pressedKey(bank.keyCode)}
    >
      <audio src={bank.url} className="clip" id={bank.keyTrigger}></audio>
      {bank.keyTrigger}
    </button>
  );
}
