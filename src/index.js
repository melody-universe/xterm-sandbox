import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import runGame from "./runGame";
import "./style.css";

const root = document.createElement("div");
document.body.appendChild(root);

const terminal = new Terminal();
const fitAddon = new FitAddon();
terminal.loadAddon(fitAddon);
terminal.open(root);

const fit = () => fitAddon.fit();
fit();
window.addEventListener("resize", fit);

runGame(terminal);
