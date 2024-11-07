// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// // Sample Output:
// true;

interface T {
  name: string;
  age: number;
  email: string;
}

type ArrString<T> = {
  [key in keyof T]: T[key];
};

function validateKeys(obj: T, keys: (keyof T)[]): boolean {
  let flagToValidateKey = true;

  keys.forEach((key) => {
    if (!(key in obj)) flagToValidateKey = false;
  });
  return flagToValidateKey;
}

const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
