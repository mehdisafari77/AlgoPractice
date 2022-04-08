// Prime factors

// 1
function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }
  
  const randomNumber = Math.floor(Math.random() * 10000);
  console.log('Prime factors of', randomNumber + ':', primeFactors(randomNumber).join(' '))

  // 2
  function getPrimeFactors(integer) {
    const primeArray = [];
    let isPrime;
  
    // Find divisors starting with 2
    for (let i = 2; i <= integer; i++) {
      if (integer % i !== 0) continue;
  
      // Check if the divisor is a prime number
      for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
      }
  
      if (!isPrime) continue;
      // if the divisor is prime, divide integer with the number and store it in the array
      integer /= i
      primeArray.push(i);
    }
  
    return primeArray;
  }
  
  console.log(getPrimeFactors(13195).join(', '));

  // 3
  let findPrimeFactors = (num) => {
    let arr = [];


    for ( var i = 2; i < num; i++) {
        let isPrime
        if (num % i === 0) {
            isPrime = true;
            for (var j = 2; j <= i; j++) {
                if ( i % j === 0) {
                isPrime == false;
                }
            } 
        }if (isPrime == true) { arr.push(i)}

    }console.log(arr)
}

findPrimeFactors(543)