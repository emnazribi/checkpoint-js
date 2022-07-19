const plusbutton=document.querySelectorAll('.plus');
const minusbutton=document.querySelectorAll('.minus');
const quantity=document.querySelectorAll('.num');
const deletebutton=document.querySelectorAll('.delete');
const deletecarte=document.querySelectorAll('.carte');
const sum=document.querySelector('#sum');
const prixelement=document.querySelectorAll('.prix_el')


for (let i=0; i<plusbutton.length; i++){
    plusbutton[i].addEventListener("click", function(){
        quantity[i].innerHTML++
        sum.innerHTML= parseInt(sum.innerHTML)+ parseInt(prixelement[i].innerHTML)
    })
}
for (let i=0; i<minusbutton.length; i++){
    minusbutton[i].addEventListener("click", function(){
        if (quantity[i].innerHTML>0){
            quantity[i].innerHTML--
            sum.innerHTML= parseInt(sum.innerHTML)- parseInt(prixelement[i].innerHTML)
        }
        
    })
}
for (let i=0; i<deletebutton.length; i++){
    deletebutton[i].addEventListener("click", function(){
        deletecarte[i].remove()
        sum.innerHTML= parseInt(sum.innerHTML)- parseInt(quantity[i].innerHTML)

    })
}

const button = document.querySelector(".heart-like-button");

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
