function findHighestNumber(numbers) {
  let highestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
}