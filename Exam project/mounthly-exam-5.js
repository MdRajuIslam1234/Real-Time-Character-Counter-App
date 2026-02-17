//Mounthly-Exam-5

const inputField = document.getElementById('input-field');
const container = document.getElementById('container');

let text  = document.getElementById("changeText");


async function fetchData(){
  try{
  let response = await fetch('https://jsonplaceholder.typicode.com/users');
  let data = await response.json();
  
  let studentLenth = inputField.value ;
 
  if(studentLenth < 1 | studentLenth > 10){
    alert('Input value is out of range!');
    return
  }

  for(i = 0; i < studentLenth; i++){
    let createElement = document.createElement('div');
  
    let child1 = document.createElement("p");
    let child2 = document.createElement("p")
    let child3 = document.createElement("p")

    child1.textContent = data[i].name;
    child2.textContent = `Email: ${data[i].email}`;
    child3.textContent = `Company: ${data[i].company.name}`;
  

    createElement.appendChild(child1);
    createElement.appendChild(child2);
    createElement.appendChild(child3)

    container.appendChild(createElement);

    createElement.classList.add('create-div');

    text.textContent = `${studentLenth} জন student load করা হয়েছে।`
 
  }
 }
  catch(err){
  alert('Error fetching data');
  }
}


 function clearValue(){
 location.reload()
 }