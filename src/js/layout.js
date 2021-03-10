"use strict"
//modal variables
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


//modal buttons
openModalButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal);
  })
})

overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal);
  })
})
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal);
  })
})

//modal functions
function openModal(modal){
  if (modal== null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeModal(modal){
  if (modal== null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//button and function for scroll to top button
const btnScroll = document.querySelector("#btnScroll");

btnScroll.addEventListener("click", function(){
 window.scrollTo({
   top:0,
   left:0,
   behavior:"smooth"
 });
});

// function for image slider
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter =1;
  }
},5000);