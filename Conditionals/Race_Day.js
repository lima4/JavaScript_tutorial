/*
9:30 am : Adult and registered early
11:00 am : Adult and registered Late
12:30pm : All youth 
Adult runner (over 18 years of age)
Youth runner (under 18 years of age)
Early adults receive a race number at or above 1000
All others receive a number below 1000*/

let raceNumber = Math.floor(Math.random() * 1000); //1000명까지의 번호를 생성한다. 
const registeredEarly = 'yes'; // registeredearly, registeredLate의 변수 생성
const age = 19; // 나이 변수 생성
if (regsiteredEarly = 'yes' && age > 18) { // 일찍 등록하고 age가 18보다 많으면 9:30am에 Race number를 받고 시작한다.
  console.log(`Race at 9:30 am, Race number :${raceNumber}`);
} else if (registeredEarly = 'No' && age > 18) { // 늦게 등록하고 age가 어른이면 11:00am에 Race number를 받고 시작한다.
  console.log(`Race at 11:00 am, Race number : ${raceNumber}`);
} else if (age < 18) { // 만약 age가 Youth라면 
  console.log(`Youth regsitrants run at 12:30 pm, Race number : ${raceNumber}`); // 모든 Youth는 12:30pm으로 racenumber를 받고 시작
} else {
  console.log('runner, see the registration desk'); // 만약 모든 Running case에 속하지 않는다면 출력한다.
}