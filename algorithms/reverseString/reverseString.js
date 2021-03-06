// Write a function that reverses a string. The input string is given 
// as an array of characters char[].

// Do not allocate extra space for another array, you must do this by 
// modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.


// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

//Ciclo
function reverseString(arr){
	const result = []; 
	for(let i = arr.length - 1; i >= 0; i--){
		result.push(arr[i]);
	};

	return result;
};

console.log(reverseString(["h","e","l","l","o"]));



//Recursión

function reverseString(string){
  let len=string.length;
  if(len<=0){
  	return []
  }
  return string[len-1]+reverseString(string.slice(0,len-1))
};

console.log(reverseString("hello world"));