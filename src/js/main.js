"use strict"

//variables

let workEl = document.getElementById("work");
let studyEl = document.getElementById("study");
//let sitesEl = document.getElementById("sites");


//eventlistener
window.addEventListener('load', getWork);
window.addEventListener('load', getStudy);
//window.addEventListener('load', getSites);

//functions

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
              <h3>${work.title} --${work.company}</h3>             
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
            <td>${study.place}</td>
            <td>${study.coursename}</td>
            <td>${study.startedu} - ${study.stopedu}</td>
          </tr>`;
      })
  })
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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

const btnScroll = document.querySelector("#btnScroll");

btnScroll.addEventListener("click", function(){
 window.scrollTo({
   top:0,
   left:0,
   behavior:"smooth"
 });
});