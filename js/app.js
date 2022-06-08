/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const title = document.getElementById('title')
const about = document.getElementById('about-link')
const contact = document.getElementById('contact-link')
const resume = document.getElementById('resume-link')
const work = document.getElementById('work-link')


/*----------------------------- Event Listeners -----------------------------*/
title.addEventListener('mouseover', function(evt) {
  evt.target.style.color = 'pink';
  evt.target.style.fontSize = '100px';
  setTimeout(function() {
    evt.target.style.color = 'white';
    evt.target.style.fontSize = '';  
  }, 500)
}, false)


about.addEventListener('click', function() {
  document.location.href='#about';
})
contact.addEventListener('click', function() {
  document.location.href='#contact';
})
resume.addEventListener('click', function() {
  document.location.href='#resume';
})
work.addEventListener('click', function() {
  document.location.href='#work';
})



/*-------------------------------- Functions --------------------------------*/


