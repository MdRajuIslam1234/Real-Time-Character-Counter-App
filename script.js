//Charecter Counter Web-Application 

//Accessing Element

const parentContainer = document.getElementById("parent-container");
const changeIconBackGround = document.getElementById("icon-section-div");
const icon = document.getElementById("icon");
const textArea = document.getElementById("text-area");
const totalCharecters = document.getElementById("total-charecter");
const totalWords = document.getElementById("total-word");
const totalSentence = document.getElementById("tolal-sentence");
const excludeSpace = document.getElementById('exclude-space');
const changeCharecterText = document.getElementById("charecter-text");
const charecterLimit = document.getElementById('charecter-limit');
const charecterLimitSection = document.getElementById("charecter-limit-section");
const setLimit = document.getElementById("set-limit");
const expandWidth = document.getElementById("expand-width");
const showLimitText = document.getElementById("showLimitText");
const bodySection = document.getElementById("body-section");
const limitAlertText = document.getElementById("limit-alert-text");
const approxTime = document.getElementById("approx-time");
const leterDensitySection = document.getElementsByClassName('letter-density-section')[0];
const initialLetterDensityText = document.getElementById("initial-letter-density-text")

const divChild1 = document.getElementsByClassName('div-child-1')[0];
const divChild2 = document.getElementsByClassName('div-child-2')[0];

const letterName = document.getElementsByClassName('letterName');
const occurrence = document.getElementsByClassName("occurrence");

const seeMore = document.getElementById("show-btn");
const seeLess = document.getElementById("hide-btn");
const seeMoreBtn = document.getElementsByClassName('see-more-btn');

const expand = document.getElementsByClassName("expand-div");


//Changing Theme

let ischangeIcon = false;

function changeTheme(){
  parentContainer.classList.toggle("dark-mood");
  changeIconBackGround.classList.toggle("dark-mood");
  textArea.classList.toggle("dark-mood");

  //changing icon

  if(ischangeIcon){
    icon.classList.remove('fa-sun');
   icon.classList.add('fa-moon');
   ischangeIcon = false ;
  }
  else{
    icon.classList.remove('fa-moon');
    icon.classList.add("fa-sun");
    ischangeIcon = true;
  }


 //Storing user preferance

  if(parentContainer.classList.contains("dark-mood")){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
  }

}

window.onload = function (){
  let theme = localStorage.getItem("theme");
  if(theme === "dark"){
    parentContainer.classList.add("dark-mood");

    changeIconBackGround.classList.add("dark-mood");

    icon.classList.remove('fa-moon');
    icon.classList.add("fa-sun");
    ischangeIcon = true;

    textArea.classList.add("dark-mood");
  }
}

//Charecter Limitation

let charecterLength = 1;

charecterLimitSection.removeChild(setLimit);

charecterLimit.addEventListener('click', ()=>{
   if(charecterLimit.checked){
    charecterLimitSection.appendChild(setLimit);
    expandWidth.classList.add('expand');
   }
   else{
   setLimit.remove()
   expandWidth.classList.remove('expand');
    limitAlertText.remove()
   setLimit.value = "";
   } 

})

//Validate limit value

bodySection.removeChild(limitAlertText);

textArea.addEventListener("keypress", ()=>{
  let limitValue = setLimit.value;
  if(charecterLimit.checked && limitValue == ""){
     textArea.style.border = "2px solid #E4E4EF";
     textArea.style.boxShadow = "0 0 0 #f0f0f0";
     limitAlertText.remove();
  }
 else if(charecterLimit.checked && charecterLength >= limitValue){
    textArea.style.boxShadow = '0 0 5px #DA3701'
    textArea.style.outlineStyle = 'none'
    textArea.style.border = '1.5px solid #DA3701'
    showLimitText.textContent = ` Limit reached! Your text exceeds ${limitValue} characters.`;

    bodySection.appendChild(limitAlertText);
  }

 
})

  


//Counting charecters,words and sentences dynamically



textArea.addEventListener("input", ()=>{

   let charecters = textArea.value.split('').length;
  let words = textArea.value.split(/\s+/).length;
  let spaces = textArea.value.split(' ').length;
  let sentences = textArea.value.split(/[.?!]+/).filter(sentence => sentence.trim().length > 0);

  if(textArea.value == ""){
  totalCharecters.textContent = "00";
  totalWords.textContent = "00" ;
  totalSentence.textContent = "00";
  }

 else if(excludeSpace.checked){
  totalCharecters.textContent = charecters - (spaces-1);
 changeCharecterText.textContent = ` (no-space)`;
  totalWords.textContent = words;
  totalSentence.textContent = sentences.length;
  charecterLength = (charecters - (spaces -1)) + 1;
}

  else{
  totalCharecters.textContent = charecters;
  totalWords.textContent = words;
  totalSentence.textContent = sentences.length;
   changeCharecterText.textContent = ``;
   charecterLength = charecters + 1;
  }

//For removing limit alert

  if(charecterLimit.checked && (charecterLength - 1) < setLimit.value){
    textArea.style.border = "2px solid #E4E4EF";
     textArea.style.boxShadow = "0 0 0 #FFFFFF"; 
     limitAlertText.remove();  
  }

//Count approx reading time

  if(textArea.value == ""){
    approxTime.textContent = "Approx, reading time: 0 minute";
  }
 else if(words >= 1 && words < 40){
 approxTime.textContent = "Approx, reading time: < 1 minute";
 }
 else if (words >= 40){
  let countApproxTime = Math.floor((words / 40)) + 1;
  approxTime.textContent = `Approx, reading time: < ${countApproxTime} minutes` ;
 }


//Letter density 


if(textArea.value == ""){
  leterDensitySection.appendChild(initialLetterDensityText);
 divChild1.style.display = 'none'
 divChild2.style.display = 'none'
 return;
}
else {
initialLetterDensityText.remove();
divChild1.style.display = "block"
}


for(let element of letterName){
   element.textContent = ""
}
for(let element of occurrence){
   element.textContent = ""
}
for(let element of expand){
   element.style.width = "0px"
}



 let allCharectes = textArea.value.split('').filter(element=>  /^[a-zA-Z]$/.test(element) );
 console.log(allCharectes)
 let findOccurrence = allCharectes.reduce((acc,value)=>{
  acc[value] = acc[value] ? acc[value] + 1: 1;
  return acc;
 }, {})

 let arr = []

let entries = Object.entries(findOccurrence);
for(let [key,value] of entries){
  arr.push({key , value});
}


 let  finalSortedArr = arr.sort((a,b)=> b.value - a.value) ;

 finalSortedArr.map((element, index)=>{

   let charecterName = element.key ;
   let charecterOccurrence = element.value ;
   let regEx = /^[a-zA-Z]$/ ;


 if(regEx.test(charecterName)){

  let findParcentage =( (charecterOccurrence / allCharectes.length) * 100).toFixed(2);
 
  letterName[index].textContent =  `${charecterName}`;
  occurrence[index].textContent = `${charecterOccurrence} (${findParcentage}%)`;

   if(window.innerWidth >  768){      //for desktop
    let totalWidth = 850 ;       
    let setWidth = Math.ceil((totalWidth * findParcentage) / 100) ;
   expand[index].style.width = `${setWidth}px`
   }
   else if(window.innerWidth <= 768 && window.innerWidth > 600){      //for tablet
    let totalWidth = 580 ;       
    let setWidth = Math.ceil((totalWidth * findParcentage) / 100) ;
   expand[index].style.width = `${setWidth}px`
   }

   else if(window.innerWidth <=  600){      //for mobile
    let totalWidth = 220 ;       
    let setWidth = Math.ceil((totalWidth * findParcentage) / 100) ;
   expand[index].style.width = `${setWidth}px`
   }

   }
   else{
    expand[index].style.display = "none";
   }

   })
 })




//Show Or Hide Button

divChild1.style.display = "none";
divChild2.style.display = "none";


seeMore.addEventListener('click', ()=>{
   seeMore.remove();
    divChild2.style.display = 'block';
   seeMoreBtn[1].appendChild(seeLess);

})

seeLess.addEventListener("click", ()=>{
  seeLess.remove();
divChild2.style.display = "none"
 divChild1.style.display = 'block'
  seeMoreBtn[0].appendChild(seeMore);
})



