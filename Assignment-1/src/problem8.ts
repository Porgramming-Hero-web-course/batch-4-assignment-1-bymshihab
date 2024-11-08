{
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
  
  // const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));
  
}
