export function formatTextByQuantitySentences(text, quantity = 1) {
  let newText = "";
  let textSymbols = text.split("");

  for (let i = 0; i < quantity; i++) {
    if (textSymbols.length > 1) {
      if (textSymbols[0] === ".") {
        textSymbols = textSymbols.slice(1);
      }

      const symbolIndex = textSymbols.findIndex((s) => s === ".");

      let sentences =
        symbolIndex !== -1 ? textSymbols.slice(0, symbolIndex) : textSymbols;
      textSymbols = textSymbols.slice(symbolIndex);

      if (/[a-zA-Z0-9_]/g.test(sentences[0])) {
        sentences.unshift(" ");
        sentences = sentences.join("");
      } else {
        sentences = sentences.join("");
      }

      newText += sentences + ".";
    } else {
      break;
    }
  }

  let newTextArray = newText.split("");
  if (newTextArray[0] === " ") {
    newTextArray = newTextArray.slice(1);
    newText = newTextArray.join("");
  }

  return newText;
}
