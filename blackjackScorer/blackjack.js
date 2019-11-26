/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21. If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */

function counter(arr){

	return inner(true)

	function inner(A){
		A = A || false
var result = arr.reduce((a,b) =>{
	if(b != 'J' && b != 'Q' && b !='K' && b != 'A') b = parseInt(b)
	if(b == 'J' || b == 'Q' || b=='K') b = 10
	if(b == 'A' && A) b = 11;
	else if (b == 'A') b = 1 
	 return a + b
},0)

	if((result <= 21) || (result > 21 && !A)  ) return result
	else return inner()
	// else if(result > 21 && !A) return inner()

}
}

console.log(counter(["A"] ))
console.log(counter(["A", "J"]))
console.log(counter(["A", "10", "A"]))
console.log(counter([5, 3, "7"] ))
console.log(counter([5,4, "3", 2, "A", "K"]))