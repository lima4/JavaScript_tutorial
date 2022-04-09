let userName = "";  //userName에 빈 스트링
userName = 'Yonggwan'
userName? console.log(`Hello, ${userName}!`): console.log('Hello'); // 만약 userName이 true라면 Hello, Yonggwan! 아니라면 Hello를 출력

let userQuestion = 'What\'s your favorite Number?'; 
console.log(`${userName}` + ' ' + `${userQuestion}`); // Prints Yonggwan What's your favorite Number?

let randomNumber = Math.floor(Math.random() * 8); // randomNumber에 0~8 까지의 숫자 삽입
let eightBall = ''
eightBall = randomNumber // eightBall변수에 randomNumber 

switch(eightBall){ //eightBall에 대해서 switch문 실행
  case 1: //만약 1이라면
    console.log('It is certain'); // It is certain 출력
  break
  case 2:
    console.log('It is decidedly so');
  break
  case 3:
    console.log('Reply hazy try again');
  break
  case 4:
    console.log('Do not count on it');
  break
  case 5:
    console.log('My sources say no');
  break
  case 6:
    console.log('Outlook not so good');
  break
  case 7:
    console.log('signs point to yes')
  break
  case 8:
    console.log('IDK')
  break
}