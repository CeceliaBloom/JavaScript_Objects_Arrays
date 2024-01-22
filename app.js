        //Exercise 1:
console.log("EXERCISE 1:\n==========\n");
        //generitc for loop and add the numbers in the array.
/*const numbers = [2, 22, 12, 17, 18, 39, 129];
  for(let i = 0; i < numbers.length; i++ ){
     console.log(numbers[i]);
 };*/

 const numbers =[2, 22, 12, 17, 18, 39, 129];
  // Declare a function arraySum that takes numbers as a parameter
function arraySum(numbers) {
  // Declare a variable sum and initialize sum as 0
  let sum = 0;

  // Inside the arraySum function body, iterate over each number using the array's forEach method
  numbers.forEach((number) => {
    // Inside the body of the forEach callback function, add each number to the value of sum
    sum += number;
  });
  // Return the sum
  return sum;
}
// Call the arraySum(numbers) method inside console.log to print out the returned sum
console.log(arraySum(numbers));

        //Exercise 2:
console.log("EXERCISE 2:\n==========\n");
const book = {};

book.bookTitle = "Harry Potter and the Prisoner of Azkaban";
book.author = "J.K.Rowling";
book.pageNumber = 317;
book.readCount = 25;

book.info = function(){
   return `${this.bookTitle} by ${this.author} is ${this.pageNumber} pages long and you have read it ${this.readCount} time(s) `;
}
console.log(book.info());


      //Exercise 3:
console.log("EXERCISE 3:\n==========\n");
const sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  let result = [];
  let words = sentence.split(" ");
  for (let x = 0; x < words.length; x++) {
    let letters = words[x].split(""); // Split into an array of characters
    letters.reverse();
    result = result.concat(letters);
  }
  return result.join(" ");
}

console.log(reverseWords(sentence));

      //Exercise 4:
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

const rows = csvData.split("\n");
const headers = rows[0].split(",");
const resultarr=[];

for(let a = 1; a < rows.length; a++){
  const rowData=rows[a].split(",");
  let obj={};
  for(let b = 0; b < headers.length; b++ ){
     obj[headers[b]]= rowData[b];   
  }
  resultarr.push(obj);
}
console.log(resultarr);








































      