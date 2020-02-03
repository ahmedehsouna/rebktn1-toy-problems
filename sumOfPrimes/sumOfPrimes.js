  
/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
    // your code here...
    let sum =0;
    let notPrimeLol = false
    for (let i = 2; i <= n; i++) {
        notPrimeLol = false

            for (var j = 2; j < i; j++) {
                if(i%j==0){
                    notPrimeLol = true
                    j=i
                }
                
            }
            if(!notPrimeLol) sum += j
    }
    return sum
}

console.log(sumOfPrimes(10))