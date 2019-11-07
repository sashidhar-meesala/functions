//write to document function
function writeOutputToDocument(result) {
    document.getElementById(`output`).innerHTML += `<li>${result}</li>`;
}

//SquareNumber solution
function SquareNumber(numnToSqaure) {
    return numnToSqaure ** 2;
    //console.log(`the result of the squaring the number ${var1} is ${squareNumber}`);
}

//SquareNumber testing
let numnToSqaure = 3; 

//SquareNumber output
writeOutputToDocument(`the result of the squaring the number ${numnToSqaure} is ` + SquareNumber(numnToSqaure));

//halfNumber solution

function halfNumber(num) {
    return num / 2;
    //console.log(`half of ${number} is ${result}`);
}
  
  //halfNumber testing
    let numberToHalf = 6;
  
  //halfNumber output
    writeOutputToDocument(`half of ${numberToHalf} is ` + halfNumber(numberToHalf)); 
  
  
  //******************** */
  
  //percentOf solution
    function percentOf(num1, num2) {
        return (num1 / num2) * 100;
    } 
  
  //percentOf testing
    let num1 = 2;
    let num2 = 4; 
  
  //percentOf output
    writeOutputToDocument(`${num1} is ${percentOf(num1, num2)}% of ${num2}`); 
  
  //*****************//areaOfCircle solution/
  
  //solution
    function areaOfCircle(radius) {
        area = 3.14 * radius * radius;
        return area.toFixed(2);
    }
  
  
  //test
    let radius = 4; 
  
  
  //output
    writeOutputToDocument(`the areaof the circle is ${areaOfCircle(radius)}`); 
  
  
  //function
  function allOfThem(num){
    let half = halfNumber(num);
    let sqaure = SquareNumber(half);
    let area = areaOfCircle(sqaure);
    let percentage = percentOf(sqaure, area);
    return percentage;
} 

//test
let numAll = 2; 

//output

writeOutputToDocument(`the output is ${allOfThem(numAll)}`);