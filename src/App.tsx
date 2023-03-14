import { FitAddon } from "xterm-addon-fit";
import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import runGame from "./runGame";

export default () => {
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!div.current) {
      return;
    }
    const terminal = new Terminal({});
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(div.current);
    const resize = () => fitAddon.fit();
    resize();
    window.addEventListener("resize", resize);
    const stopGame = runGame(terminal);
    return () => {
      stopGame();
      window.removeEventListener("resize", resize);
    };
  }, [div]);
  return <div ref={div} style={{ minHeight: "100vh" }} />;
};
