import {
  faBeer,
  faMinus,
  faPencilAlt,
  faPlus,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import ReactCanvasConfetti from "react-canvas-confetti";
import Player from "../components/Player";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

const Home: NextPage = () => {
  const [playerOneName, setPlayerOneName] = useState("Player 1");
  const [playerOneScore, setPlayerOneScore] = useState(0);

  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState<any>();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const playerOneRef = useRef<any>();
  const playerTwoRef = useRef<any>();

  return (
    <div className="w-screen h-screen flex items-stretch justify-items-stretch bg-black">
      <Head>
        <title>Score Tracker</title>
        <meta name="description" content="Score Tracker" />
        <link rel="icon" href="/favicon/icon-48x48.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="ScorerApp"></meta>
        <link rel="apple-touch-icon" href="/icon.png"></link>
        {/* <link rel="apple-touch-icon" href="/favicon/icon-48x48.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicon/icon-48x48.png"
        /> */}

        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>

      <main className="bg-violet-50 rounded-lg flex flex-col flex-1">
        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />

        {/* <h1 className="text-4xl font-bold text-center p-4 pb-0">
          Score Tracker
        </h1> */}

        <div className="flex-1 flex flex-col md:flex-row items-stretch justify-items-stretch gap-4 m-4">
          {/* <div className="border-2 border-blue-300 bg-blue-50 rounded-lg flex-1 flex items-center px-4"> */}
          {/* <div className="flex-1 flex flex-col gap-2">
            <div className="flex">
              <div className="flex-1 border-2 border-red-300 bg-red-50 text-red-800 rounded-lg p-1 text-center">
                <h2 className=" font-bold text-lg">{playerOneName}</h2>
              </div>
              <button
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="border-2 border-red-300 bg-red-50 ml-2 rounded-lg px-4"
                onClick={() => {
                  const enteredName = prompt("Please enter your name");

                  if (enteredName.length > 1) {
                    setPlayerOneName(enteredName);
                  }
                }}
              >
                <FontAwesomeIcon icon={faPencilAlt} className="text-red-800" />
              </button>
            </div>
            <div className="px-8 flex-1 border-2 border-red-300 bg-red-50 rounded-lg flex items-center ">
              <button
                className="w-24 h-24 bg-white text-yellow-600 font-bold rounded-full hover:scale-125 transition-transform focus:outline-none"
                style={{ WebkitTapHighlightColor: "transparent" }}
                onClick={() => {
                  if (playerOneScore - 1 > -1)
                    setPlayerOneScore(playerOneScore - 1);
                }}
              >
                <FontAwesomeIcon icon={faMinus} size={"2x"} />
              </button>
              <div className="flex-1">
                <h2 className="text-6xl font-bold text-center text-red-900">
                  {playerOneScore}
                </h2>
              </div>
              <button
                className="w-24 h-24 bg-white text-green-600 font-bold rounded-full hover:scale-125 transition-transform"
                style={{ WebkitTapHighlightColor: "transparent" }}
                onClick={() => {
                  if (playerOneScore + 1 < 12) {
                    setPlayerOneScore(playerOneScore + 1);
                  }
                  if (playerOneScore + 1 == 11) {
                    startAnimation();
                  }
                }}
              >
                <FontAwesomeIcon icon={faPlus} size={"2x"} />
              </button>
            </div>
          </div> */}

          <Player
            ref={playerOneRef}
            defaultName={"Player One"}
            playerWon={startAnimation}
          />
          <Player
            ref={playerTwoRef}
            defaultName={"Player Two"}
            playerWon={startAnimation}
          />

          {/* <div className="flex flex-col justify-center border-2 items-center border-gray-300 bg-gray-50 text-gray-800 rounded-lg text-center">
            <button
              className="w-16 h-full"
              style={{ WebkitTapHighlightColor: "transparent" }}
              onClick={() => {
                console.log("Hi");
              }}
            >
              <FontAwesomeIcon icon={faPlus} size={"1x"} />
            </button>
          </div> */}
        </div>
        <button
          className="bg-violet-100 py-2 m-4 mt-0 rounded mb-8"
          onClick={() => {
            pauseAnimation();

            setPlayerOneScore(0);

            if (playerOneRef.current && playerTwoRef.current) {
              playerOneRef.current.resetScore();
              playerTwoRef.current.resetScore();
            }
          }}
        >
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </main>
    </div>
  );
};

export default Home;
