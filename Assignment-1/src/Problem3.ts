function countWordOccurrences(sentence: string, targetWord: string): number {
  let str: string[] = [];

  sentence
    .trim()
    .split(/\W+/)
    .filter((n) => {
      console.log(n);
      if (n.toLowerCase() === targetWord.toLowerCase()) {
        str.push(n);
      }
    });

  console.log(str);

  return str.length;
}
// console.log(
//   countWordOccurrences(
//     "TypeScript is great. I love TypeScript!, TypeScript, TypeScript, TypeScript",
//     "typescript"
//   )
// );

// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
