function sumArray(numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

function averageArray(numbers) {
  if (numbers.length === 0) return 0; 
  const sum = sumArray(numbers);
  return sum / numbers.length;
}

function longestString(strings) {
  return strings.reduce((longest, current) =>
      current.length > longest.length ? current : longest, "");
}

function stringsLongerThan(strings, length) {
  return strings.filter(str => str.length > length);
}

function printNumbers(n) {
  if (n < 1) return;
  printNumbers(n - 1);
  console.log(n);
}