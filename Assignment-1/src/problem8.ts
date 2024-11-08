{
  interface User {
    name: string;
    age: number;
    email: string;
  }

  function validateKeys(obj: User, keys: (keyof User)[]): boolean {
    let flagToValidateKey = true;

    keys.forEach((key) => {
      if (!(key in obj)) flagToValidateKey = false;
    });
    return flagToValidateKey;
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
