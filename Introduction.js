/* Console
Python으로 말하자면 Print와 같은 문법이다.
출력하는 방법으로는 여러가지가 있는데 기본적으로
Console.log(~); 를 사용해서 출력한다.*/
console.log(5);
console.log(10);
console.log('cada');
console.log('*');

/*Data Types
Number : 10진법으로 나타내는 숫자
String : 문자로 '' or ""로 표현한다.
Boolean : True, False
Null : 변수를 선언하고 빈 값을 할당한 상태
Undefined : 변수를 선언하고 값을 할당하지 않은 상태이다. 
즉, Undefiend는 자료형이 없는 상태로 Null은 object형*/

/* arithmetic Operators
+ : 더하기
- : 빼기
* : 곱하기
/ : 나누기
% : 나머지 */

// String Concatenation
console.log('hi' + 'ya') //'hiya'
console.log('서울특별시 '+ '마포구')// '서울특별시 마포구
console.log('back'+' '+'space') // back space

/* Properties 
JavaScript의 데이터들은 저장될때 각각의 용량을 가지고 저장된다.
문자열인 경우는 .length를 통해서 확인할 수 있다. 공백또한 마찬가지
*/
console.log('Hello'.length); //print 5
console.log('Teaching the wrold how to code'.length); //30

/* Methods
여러가지 방법들, 함수들에 대한 설명
Ex) toUpperCase(), startsWith()
*/
console.log('Codecademy'.toUpperCase()); //전부 대문자로 출력 CODECADEMY
console.log('CODECADEMY'.toLowerCase()); //전부 소문자로 출력 codecademy
console.log('Hey'.startsWith('H')); //시작하는 문자가 맞다면 True, 아니면 False 출력 True
console.log(' Remove whitespace '.trim()); // 좌우 공백을 제거한다. Remove whitespace

/* Built-in Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
console함수에 더해서 Object를 추가로 수행하는 함수
*/
console.log(Math.random()); // 기본적으로 Math.random()함수는 0~1까지의 숫자
console.log(Math.random() * 50); // 0부터 50까지의 숫자를 표현한다. 소수점까지 가능하다.
console.log(Math.floor(Math.random())) // 10진수 형태로만 나오게끔 Math.floor를 통해서 소수점 제거 
console.log(Math.ceil(43.8)); //Math.ceil함수는 올림 형태로 반환
console.log(Number.isInteger(2018)); //Number.isInteger함수는 값이 숫자형인지 True, False로 반환