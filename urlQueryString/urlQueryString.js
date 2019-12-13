/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
HINT: You may use decodeURIComponent()
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
	var questionMark = false
	var equalSign = false
	var key=""
	var val = ""
	var arr = []
	for (var i = 0; i < url.length; i++) {
		if(url[i] == "%"){
			i += 3
			val += " "
		} 

		if(url[i] == "&" || i == url.length - 1){
			if(i == url.length - 1) val += url[i] 
			equalSign = false
			if(key != "") arr.push([key , val])
			key = ""
			val = ""
			questionMark = true
			i++

		} 
		if(equalSign) val += url[i]
		
		if(url[i] == "="){
			equalSign = true
			questionMark = false
		} 
		if(questionMark) key += url[i] 
		
		if(url[i] == '?') questionMark = true 
		
	}
	return arr.length? arr : undefined
}

console.log(parseQueryString("http://example.com?a=hello&b=99"))
console.log(parseQueryString("http://example.com?msg=hello%20world"))
console.log(parseQueryString("http://example.com"))