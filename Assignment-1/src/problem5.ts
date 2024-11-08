{
  interface User {
    name: string;
    age: number;
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    if (key in obj) return obj[key];
  }

  // const person: User = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));
}
