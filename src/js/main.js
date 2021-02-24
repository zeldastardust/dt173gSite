"use strict"

//variables for fetch data from api

let workEl = document.getElementById("work");
let studyEl = document.getElementById("study");
let sitesEl = document.getElementById("sites");


//eventlistener for fetch data from api
window.addEventListener('load', getWork);
window.addEventListener('load', getStudy);
window.addEventListener('load', getSites);

//functions for fetch data from api

function fetchData() {
    showWork();
    //showEducation();
   // showProjects();
  }
function getWork(){
    workEl.innerHTML='';
    fetch("http://localhost/dt173g/api/work.php")
    .then(response => response.json())
    .then(data => {
        data.records.forEach(work =>{
            workEl.innerHTML +=
            `
            <div class="workContent">
              <li>${work.title} --${work.company}</li>             
            </div>
          `;           
        })
    })
}

function getStudy(){
  studyEl.innerHTML='';

  fetch("http://localhost/dt173g/api/study.php")
  .then(response => response.json())
  .then(data => {
      data.records.forEach(study =>{
          studyEl.innerHTML +=
          `<tr>
          <td>${study.coursename}</td>
            <td>${study.place}</td>   
          </tr>`;
      })
  })
}

function getSites(){
  sitesEl.innerHTML='';
  fetch("http://localhost/dt173g/api/sites.php")
  .then(response => response.json())
  .then(data => {
      data.records.forEach(sites =>{
          sitesEl.innerHTML +=
          `
          <div class="sitesContent">
           <a href="${sites.url}" <h2>${sites.webname}</h2></a>
            
            <p>${sites.description}</p>             
          </div>
        `;           
      })
  })
}



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

//image slider

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter =1;
  }
},5000);