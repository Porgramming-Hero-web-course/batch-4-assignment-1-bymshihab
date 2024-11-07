// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

// Hints: Use keyof

// // Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// // Sample Output:
// Alice;
{
  interface User {
    name: string;
    age: number;
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    if (key in obj) return obj[key];
  }

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
