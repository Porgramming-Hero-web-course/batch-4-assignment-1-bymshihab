{
  type array = number[];
  function sumArray(nums: array): number {
    let res: number = 0;
    nums.map((n) => (res = res + n));
    console.log(res);

    return res;
  }

  sumArray([1, 2]);
}
