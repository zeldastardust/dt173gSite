"use strict"
/*let urlWork = 'http://localhost/dt173g/api/work.php'; //variabel för anrop till work api
let urlStudy  = 'http://localhost/dt173g/api/study.php';//variabel för anrop till study api
let urlSites ='http://localhost/dt173g/api/sites.php';//variabel för anrop till sites api*/


let urlWork = 'http://studenter.miun.se/~mali1910/dt173g/projekt/api/work.php';
let urlStudy='http://studenter.miun.se/~mali1910/dt173g/projekt/api/study.php';
let urlSites='http://studenter.miun.se/~mali1910/dt173g/projekt/api/sites.php';
//variables for fetch data from api

let workEl = document.getElementById("work");
let studyEl = document.getElementById("study");
let sitesEl = document.getElementById("sites");


//eventlistener for fetch data from api
window.addEventListener('load', getWork);
window.addEventListener('load', getStudy);
window.addEventListener('load', getSites);

//functions for fetch data from api
function getWork(){
    workEl.innerHTML='';
    fetch(urlWork)
    .then(response => response.json())
    .then(data => {
        data.worklist.forEach(work =>{
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
  fetch(urlStudy)
  .then(response => response.json())
  .then(data => {
      data.studylist.forEach(study =>{
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
  fetch(urlSites)
  .then(response => response.json())
  .then(data => {
      data.sitelist.forEach(sites =>{
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
