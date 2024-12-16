//alert("loading");
function addNewWEField(){
// console.log("Adding new field");
     let newNode=document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('wefield');
     newNode.classList.add('mt-2');
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder",'Enter here');

     let weOb=document.getElementById("we");
     let weAddButtonOb=document.getElementById("weAddButton");

     weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewAQField(){
     let newNode=document.createElement('textarea');
     newNode.classList.add('form-control');
     newNode.classList.add('eqfield');
     newNode.classList.add('mt-2');
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder",'Enter here');

     let aqOb=document.getElementById("aq");
     let aqAddButtonOb=document.getElementById("aqAddButton");

     aqOb.insertBefore(newNode,aqAddButtonOb);
}


// generate Resume
function generateResume() {
// console.log("Generating Resume");
let namefield=document.getElementById('namefield').value;

let nameT1=document.getElementById('nameT1');

nameT1.innerHTML=namefield;

document.getElementById('nameT2').innerHTML=namefield;

document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;

document.getElementById('addressT').innerHTML=document.getElementById('addressfield').value;

document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;

document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

document.getElementById('objectiveT').innerHTML=document.getElementById('objectivefield').value;




let wes=document.getElementsByClassName('wefield')

let str=''

for(let e of wes){
     str=str+`<li> ${e.value} </li>`;
}
document.getElementById('weT').innerHTML= str;


let aqs=document.getElementsByClassName('eqfield');

let str1=''

for(let e of aqs){
     str1=str1+`<li> ${e.value} </li>`;
}
document.getElementById('aqT').innerHTML= str1;

let file=document.getElementById('imgField').files[0];

console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend=function(){
     document.getElementById("imageT").src = reader.result;
};

document.getElementById('resume-form').style.display="none";
document.getElementById('resume-template').style.display="block";

};

function printResume(){
     window.print();
};