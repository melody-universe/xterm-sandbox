import ansi from "ansi-escape-sequences";
import figlet from "figlet";
import deltaCorpsPriest from "figlet/importable-fonts/Delta Corps Priest 1";

figlet.parseFont("Delta Corps Priest 1", deltaCorpsPriest);

export default function runGame(terminal) {
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
    async function drawWord(word, transformer) {
      return new Promise((resolve) =>
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
