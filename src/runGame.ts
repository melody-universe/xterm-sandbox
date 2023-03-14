import ansi from "ansi-escape-sequences";
import figlet from "figlet";
import deltaCorpsPriest from "figlet/importable-fonts/Delta Corps Priest 1";
import { Terminal } from "xterm";

figlet.parseFont("Delta Corps Priest 1", deltaCorpsPriest);

export default function runGame(terminal: Terminal) {
  (async () => {
    await drawBanner();
  })();
  return () => {};

  async function drawBanner() {
    await drawWord(
      "Wheat",
      (line) => `${ansi.style.yellow}${line}${ansi.style.reset}`
    );
    await drawWord("Hoarder");
    async function drawWord(
      word: string,
      transformer?: (line: string) => string
    ) {
      return new Promise<void>((resolve) =>
        figlet(word, "Delta Corps Priest 1", (error, result) => {
          if (!result) {
            throw error;
          }
          result
            .split("\n")
            .forEach((line) =>
              terminal.writeln(transformer ? transformer(line) : line)
            );
          resolve();
        })
      );
    }
  }
}
