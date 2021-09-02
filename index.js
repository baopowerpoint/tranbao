let navToggle = document.querySelector('.nav-toggle')
console.log(navToggle)

navToggle.addEventListener('click', () =>
{
    
    document.body.classList.toggle('nav-open')
})