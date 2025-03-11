function firstNonRepeatedChar(str) {
 // Write your code here 
	let countChar = {}
	for(let char of str){
		countChar[char] = (countChar[char] || 0) +1
	}
	for(let char of str){
		if(countChar[char] === 1){
			retrun char;
		}
	}
	return null;
	
}
const input = prompt("Enter a string");
aler(firstNonRepeatedChar(input)); 
