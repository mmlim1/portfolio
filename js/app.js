/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const about = document.getElementById('about-link')
const contact = document.getElementById('contact-link')
const resume = document.getElementById('resume-link')
const work = document.getElementById('work-link')


/*----------------------------- Event Listeners -----------------------------*/
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


