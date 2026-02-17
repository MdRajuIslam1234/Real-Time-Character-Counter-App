//Mounthly Exam 2.


//Problem Solving


//problem-1 (solved)

const arr1 =  [2, 5, 8, 13, 20]

const letsee = [];

for (i = 0; i<arr1.length; i++){
 
  if ( arr1[i] % 2 == 0){
     letsee.push(arr1[i]);
  }

}

let result1 = letsee.length;

console.log(result1);



//Problem-2(solved)


let srt2 = "CodeJogot";

let strresult = [];

for (i = 0; i <srt2.length ; i++){
    strresult.push(srt2[i]);
}

let x = strresult.reverse();
 
let y = x.join("");

console.log(y);



//problem-3(Solved)

const arr3 = [10,20,10];


function sumArray(numbers){
   let sum = 0;
   for (i = 0; i<numbers.length; i++){
    sum = sum + numbers[i];
   }
   return sum;
}

let result3 = sumArray(arr3);
console.log(result3);


//Problem-4 (solved)

const arr4 = [4,10,18,45,6];

let maximum = arr4[0];

function findMax(Array){
   for (let element of Array){
   
     if (element > maximum){
      maximum = element;
     }
   }
   return maximum;
   
}
let result4 = findMax(arr4);
console.log(result4);


//Problem-5(Solved)

   const student = { name: "Rahim", age: 20, city: "Dhaka" };

   let names = student.name;
   let cities = student.city;

   console.log(names);
   console.log(cities);


//Problem-6(solved)

const product = { name: "Laptop", price: 50000 };

product.brand = "HP";
console.log(product["brand"]);



//problem-7(solved)

let srt7 = "I love programming in JavaScript";

const newarr7 = [];

const splits = srt7.split(" ");

for (i = 0; i <splits.length;i++ ){

   if ( splits[i].length >= 5  ){
     newarr7.push(splits[i]);
   }
}

console.log(newarr7);



//problem-8(solved)

const arr8 =[1, 2, 3, 4];

let  newarray = [];

for ( i = 0; i <arr8.length; i++){
   newarray.push( 2 * arr8[i])
}

console.log(newarray);

//problem-9(solved)

let str9 = "madam";
let convertA = Array.from(str9);
let reverses = convertA.reverse();
let finalStr = reverses.join('');

function isPalindrome(str){
  if (str === finalStr) return true;
   return false;
}

let result9 = isPalindrome(str9);
console.log(result9);


//From chatgtp 

// let str9 = 'madam';

// function isPalindrome(str){
//    let rstr = str.split("").reverse().join('');
//     return (rstr === str); 
   
// }
// let result9 = isPalindrome(str9);
// console.log(result9);



//problem-10 (solved)


const users = [
  { name: "Abdul Alim", age: 25 },
  { name: "Hasan", age: 19 },
  { name: "Abdul Karim", age: 30 }
];

let result10 = [];

users.filter((value) => {
  if (value.age > 20){
    result10.push(value.name)
  }
})

console.log(result10);



// সংক্ষেপে **return** কবে দিতে হবে:

// 1. **ফাংশন থেকে মান পেতে চাইলে** return দিতে হবে

// ```js
// function add(a,b){ return a+b; }
// ```

// 2. **Arrow function এ `{ }` ব্যবহার করলে** return দিতে হবে

// ```js
// const double = x => { return x*2; }
// ```

// 3. **Arrow function এ `{ }` না থাকলে** return লাগবে না (implicit return)

// ```js
// const double = x => x*2;
// ```

// 4. `map / filter / reduce` এর কলব্যাক যদি `{ }` থাকে → return লাগবে

// ```js
// arr.map(x => { return x*2; });
// ```

// `{ }` না থাকলে return লাগবে না

// ```js
// arr.map(x => x*2);
// ```

// 5. ফাংশন যদি শুধু কাজ করে (console.log, DOM update) এবং **কিছু ফেরত প্রয়োজন না** → return লাগবে না

// ```js
// function show(m){ console.log(m); }
// ```
