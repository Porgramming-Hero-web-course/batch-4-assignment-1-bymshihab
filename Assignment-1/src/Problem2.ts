{
  type NumberArray = number[];
  function removeDuplicates(nums: NumberArray): NumberArray {
    let newArray: NumberArray = [];

    nums.forEach((n) => {
      if (!newArray.includes(n)) {
        // using not(!) operator. if valid pushed into newarray
        newArray.push(n);
      }
    });
    console.log(newArray);

    return newArray;
  }

  removeDuplicates([1, 2, 5, 22, 2, 6, 6, 99, 3]);
}
