/*
In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.
You must check within string (s) to fid all of the mating pairs, and return a string containing only them. Line them up for inspection.
Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).
Return an array containing a string of only the mating pairs available. e.g:
'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)
and true if the number is more than or equal to x, false if not:
(6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];
x will always be a positive integer, and s will never be empty
- regular expression is not allow 
*/


// without regular expressions !!!!!!!!!!

function PairsOfBears(x,str){
	var mates = ""
	var counter = 0
	for (var i = 0; i < str.length; i++) {
		if(((str[i] == "B" && str[i+1] == "8") ||
		    (str[i] == "8" && str[i+1] == "B")) && 
			(str[i-1] != "8" && str[i-1] != "B" && str[i+2] != "8" && str[i+2] != "B" )){
				mates += str[i] + str[i+1]
				counter++
		} 
	}
	return [mates, counter >= x]
}

console.log(PairsOfBears(2,"EvHB8KN8ik8BiyxfeyKBmiCMj"))

// without regular expressions !!!!!!!!!!


//reqular expressions time :333333

function RegPairsOfBears(x,str){
	var myReg = str.match(/[^B^8]8B[^B^8]|[^B^8]B8[^B^8]/g)
	var mates = myReg? myReg.map(one => one[1] + one[2]).join(""): ""
	var counter = 0
	return [mates, myReg? myReg.length >= x : false]
}

console.log(RegPairsOfBears(2,"EvHB8KN8ik8BiyxfeyKBmiCMj"))
