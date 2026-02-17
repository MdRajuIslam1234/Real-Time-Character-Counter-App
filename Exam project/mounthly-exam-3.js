//MONTHLY EXAM 3 //  


//Task – 1: Email Address Validation (Solved)


let email = 'user.name@gmail.com';

const regExp1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

let result1 = regExp1.test(email);

console.log(result1);



//Task– 2: Password Strength Checker (Solved)


let userInput ='CodeJogot29';

const regExp2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

let result2 = regExp2.test(userInput);

if (result2){
  console.log('Strong Password');
}
else(
  console.log('Weak Password')
);



//Task– 3: Phone Number Validation (Bangladesh) (Solved)

let phoneNum = '01527773832';

const regExp3 = /^01[657893][\d]{8}$/;

let result3 = regExp3.test(phoneNum);

console.log(result3);




//Task– 4: Username Validation(Solved)

let userName = 'hdev123';

const regExp4 = /^[a-zA-Z_][\w]{5,14}$/;

let result4 = regExp4.test(userName);

console.log(result4);



//Task– 5: Find and Highlight All Numbers in a Text(Solved)

let findstr = 'I have 2 pens, 5 books and 10 notebooks.';

const regExp5 = /\d+/g;

let result5 = findstr.match(regExp5);

console.log(`Found Numbers:${result5}`);


/*
let result = [2,5 ,10];

*/