import {
  faPencilAlt,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useImperativeHandle, useState } from "react";

const Player = forwardRef(
  (
    props: {
      children?: React.ReactNode;
      defaultName: string;
      playerWon: Function;
    },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      resetScore() {
        setPlayerScore(0);
      },
    }));

    const [playerName, setPlayerName] = useState(props.defaultName);
    const [playerScore, setPlayerScore] = useState(0);

    return (
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex">
          <div className="flex-1 border-2 border-blue-300 bg-blue-50 text-blue-800 rounded-lg p-1 text-center">
            <h2 className=" font-bold text-lg">{playerName}</h2>
          </div>
          <button
            style={{ WebkitTapHighlightColor: "transparent" }}
            className="border-2 border-blue-300 bg-blue-50 ml-2 rounded-lg px-4"
            onClick={() => {
              const enteredName = prompt("Please enter your name");

              if (enteredName.length > 1) {
                setPlayerName(enteredName);
              }
            }}
          >
            <FontAwesomeIcon icon={faPencilAlt} className="text-blue-800" />
          </button>
        </div>
        <div className="px-8 flex-1 border-2 border-blue-300 bg-blue-50 rounded-lg flex items-center ">
          <button
            className="w-24 h-24 bg-white text-yellow-600 font-bold rounded-full hover:scale-125 transition-transform"
            style={{ WebkitTapHighlightColor: "transparent" }}
            onClick={() => {
              if (playerScore - 1 > -1) setPlayerScore(playerScore - 1);
            }}
          >
            <FontAwesomeIcon icon={faMinus} size={"2x"} />
          </button>
          <div className="flex-1">
            <h2 className="text-6xl font-bold text-center text-blue-900">
              {playerScore}
            </h2>
          </div>
          <button
            className="w-24 h-24 bg-white text-green-600 font-bold rounded-full hover:scale-125 transition-transform"
            style={{ WebkitTapHighlightColor: "transparent" }}
            onClick={() => {
              if (playerScore + 1 < 12) {
                setPlayerScore(playerScore + 1);
              }
              if (playerScore + 1 == 11) {
                // startAnimation();
                props.playerWon();
              }
            }}
          >
            <FontAwesomeIcon icon={faPlus} size={"2x"} />
          </button>
        </div>
      </div>
    );
  }
);

export default Player;
