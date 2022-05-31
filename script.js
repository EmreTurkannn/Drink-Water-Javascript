const smallCup=document.querySelectorAll(".cup-small");
const percentage=document.querySelector(".percetange");


smallCup.forEach((cup,id)=>{
cup.addEventListener("click",()=>fullcup(id))  

});



function fullcup(id){
if(smallCup[id].classList.contains('full')&&!smallCup[id].nextElementSibling.classList.contains('full')){
    id--;
}

smallCup.forEach((cup,id2)=>{
    console.log(id2+" id 2");
    console.log(id+" id 1 ");
if(id2<=id){
    cup.classList.add('full');
}
else{
    cup.classList.remove('full');
}


});    

updatebigcup();
}

function updatebigcup(){
const selectedcup=document.querySelectorAll(".cup-small.full").length;
const totalcup=document.querySelectorAll(".cup-small").length;

if(selectedcup===0){
    percentage.style.visibility='hidden';
    percentage.style.height=0;
}
else{
    percentage.style.visibility='visible';
    percentage.style.height=`${selectedcup/totalcup*330}px`;

}    

}