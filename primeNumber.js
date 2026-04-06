function isPrime(num) {

  // numbers less than 2 are not prime
  if (num <= 1) {
    return "Not Prime";
  }

  // check divisibility
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }

  return "Prime";
}

console.log(isPrime(10));