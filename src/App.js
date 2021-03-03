import React, { useState } from "react";
import Machine from "./components/Machine";
import "./app.css";

export default function App() {
  const [actualSound, setActualSound] = useState("");
  const [powered, setPowered] = useState(false);
  const [volume, setVolume] = useState(1);

  const soundBanks = [
    [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],
    [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Chord-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Chord-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Chord-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Shaker",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Punchy-Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Side-Stick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Snare",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      },
    ],
  ];

  const [currentSoundBank, setCurrentSoundBank] = useState(soundBanks[0]);

  // console.log(currentSoundBank);

  return (
    <div id="drum-machine">
      <h1>The Drum Machine</h1>
      <div id="powerContainer">
        <h4>ON|OFF</h4>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              setPowered(!powered);
            }}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>
      <div className={powered ? "monitor" : "monitor off"}>
        <span id="displaySound" className="displaySound">
          {actualSound}
        </span>
      </div>
      <div className="soundsSet">
        <button
          className={powered ? "set" : "set off"}
          onClick={() => setCurrentSoundBank(soundBanks[0])}
        >
          Set 1
        </button>
        <button
          className={powered ? "set" : "set off"}
          onClick={() => setCurrentSoundBank(soundBanks[1])}
        >
          Set 2
        </button>
      </div>
      <div id="display">
        {currentSoundBank.map((bank) => (
          <Machine
            key={bank.id}
            id={bank.id}
            bank={bank}
            setActualSound={setActualSound}
            powered={powered}
            volume={volume}
          />
        ))}
      </div>
      <div id="volumeContainer">
        <h4>Volume</h4>
        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          id="volume"
        ></input>
      </div>
    </div>
  );
}
