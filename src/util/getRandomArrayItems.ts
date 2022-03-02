// Based on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export default function getRandomArrayItems(array: any[], amount: number) {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array.slice(0, amount);
}
