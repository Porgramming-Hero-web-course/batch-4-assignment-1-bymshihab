{
  interface UserProfile {
    name: string;
    age: number;
    email: string;
  }
  // type UpdateAge = Array<{ age: number }>;
  type UpdateAge = {
    age: number;
  };

  function updateProfile(user: UserProfile, newAge: UpdateAge): UserProfile {
    user.age = newAge.age;

    return user;
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 30 }));
}
