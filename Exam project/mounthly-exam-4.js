//Mounthly-Exam-4

//Problem-1 (Find Index Of First Occurrence)

const array = [1, 3,4, 5, 7,4, 9];
let target =  9;

 function findIndex(arr,target){
    for(i=0; i<arr.length; i++){     //Lenear Search(Solved)
      if(arr[i] == target) return i;
      }
    
    return -1;                   
  };

 let result = findIndex(array,target);
 console.log(result);




 //Problem-1(Find Index Of First Occurrence)
   
 const arr1 = [1, 2, 4, 4, 4, 6, 8, 8,10]
 let target1 = 4;

 
 function binarySearch1(arr,target,left , right){
   while(left <= right){

     let mid = Math.floor((left + right) / 2);

     if (arr[mid] == target) return arr.indexOf(target); //Time Complexity O(n) 🥲

     else if(arr[mid] > target){       //Binary Search Algorithm (Solved)
       right = mid - 1;   
     }            //Ultimately Leanear Search, because of indexOf() method.

     else{
      left = mid + 1;
     }
   }

   return -1;
 }

 function findIndex1(arr,target){
   let len = arr.length - 1;
   let x = binarySearch1(arr,target,0,len);
   return x;
 }
 let result1 = findIndex1(arr1,target1);
 console.log(result1);




 //Chatgtp Solution (Binary Search) 

 const arr3 = [2,3,3,4,4,4,4,5];
 let target3 = 4;

 function binarySearch3(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let result = - 1;
  
    while(left <= right){
      let mid = Math.floor((left + right) / 2);
      if(arr[mid] == target){       
         result = mid;
         right = mid - 1;   //Best solution for the question.
      }
      else if (arr[mid] > target){
         right = mid - 1;   //Binary Search Algorithm(Solved)
      }                     //Time Complexity O(log n);
      else{
        left = mid + 1;
      }
    }

    return result;

 }

  let result3 = binarySearch3(arr3,target3)
  console.log(result3)
 

