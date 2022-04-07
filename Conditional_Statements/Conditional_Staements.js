/* Conditional Statements?
If Statement 
if (true) {
    console.log('This message will print!');
} */

let sale = true; // sale이라는 변수에 true boolean 값 넣기
if (sale) { // 만약 sale이라는 변수가 true라면
    console.log('Time to buy!') // Time to buy! 를출력한다.
} else {  // 만약 sale이 false라면  
    console.log('Time to wait for a sale.') // 출력 
};

/* Comparison Operators
Less than <
Greater than >
less than or equal to <=
Greater than or equal to >=
equal to ===
is not equal to !==

10 < 12 // true
'apples' === 'oranges' //false
*/
let hungerLevel = 7; // hungerLevel에 7이라는 값 저장

if (hungerLevel > 7) { // 만약 hungerLevel이 7보다 크다면
  console.log('Time to eat!'); // Time to eat! 출력
} else { // 아니라면
  console.log('We can eat later!'); // We can eat later 출력
};

/* Logical Operators 
And : &&
or : ||
반대를 의미하는 !  */
let mood = 'sleepy'; // let 형식의 mood에 sleepy 
let tirednessLevel = 6; // let 형식의 tirednessLevel에 6

if (mood === 'sleepy' && tirednessLevel > 8){ // 만약 mood가 'sleepy'이고 tirednessLevel이 8보다 크다면
  console.log('time to sleep'); // time to sleep 출력
} else { //아니라면
  console.log('not bed time yet'); // not bed time yet 출력
}

let excited = true; // boolean인 true값 
console.log(!excited); // !true 즉 false를 출력한다. 

/* Thruth and Falsy 
기본적으로 true, false 및 연산자, 논리 연산자에 대해서 실행되지만
0, "", '', null, undefiend, NaN 등에 대해서는 받아들이지 못한다.
*/
let numberOfApples = 0; //numberOfApples를 0
if (numberOfApples){ //만약 true, false나 연산자라면 조건에 맞춰서 실행이 되지만 0이므로 실행X
    console.log('Let us eat apples1');
} else { //0, '', "", null, NaN, undefiend는 위의 if구문에 X로써
    console.log('No apples left!'); //No apples left가 출력된다.
}

// Truthy and Falsy Assignment 

let username = ''; // username에 공백 
let defaultName; // defaultName에 값 X 
 
if (username) { // username이 true라면 
  defaultName = username; // defaultName은 username으로 But 공백으로 else로 간다.
} else {
  defaultName = 'Stranger'; // defaultName을 'Stranger'로 
}
console.log(defaultName); // Prints: Stranger

// 위와 같은 방식을 간결하게
let username1 = ''; 
let defaultName1 = username1 || 'Stranger'; //if else구문을 ||로 한다. 
// username || 'Strange' 는 처음 왼쪽의 조건을 확인하고 값을 넣는다
// username1이 True라면 그대로 defaultName1에 삽입
// username이 falsy라면 'stranger'를 삽입한다.
console.log(defaultName1); // Prints: Stranger

/* Ternary Operator 
위의 if, ifelse의 구문을 훨씬 쉽고 간결하게 변경할 수 있다.*/
let isCorrect = true;
if(isCorrect) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
} // Print Correct  

isCorrect ? console.log('Correct!') : console.log('Incorrect!'); // isCorrect가 true라면? console.log('Correct!)를 출력하고 false라면 console.log('Incorrect!)를 출력한다.

// Else if Statements 
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
} // Print Slow down 

/* The switch keyword 
switch keyword는 else if문 보다 깔끔하고 간결하게 가능하다.
let groceryItem = 'papaya'; 
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
} Print Papayas are $1.29 
*/
let groceryItem = 'papaya';
 
switch (groceryItem) {  // if else구문이 아닌 switch를 통해서 사용한다.
  case 'tomato': // groceryItem의 case가 tomato인 경우 
    console.log('Tomatoes are $0.49'); // 출력
    break; // 종료
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default: // 어떠한 case도 groceryItem과 같지 않다면
    console.log('Invalid item'); // Invalid item을 출력
    break;  //종료한다.
} // Prints 'Papayas are $1.29' 
 
