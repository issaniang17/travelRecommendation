let contactForm = document.getElementById('formContact')
let travel;
let result = document.getElementById('description')
let search = document.getElementById('search')
let reset = document.getElementById('reset')
let searchText = document.getElementById('searchText')
console.log(searchText)

reset.addEventListener('click', ()=>{
    searchText.value = ''
})

searchText.addEventListener('change',(event)=>{
    searchText.value = event.target.value.trim()
    console.log(searchText.value)
})
search.addEventListener('click', ()=>{
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    
})
// contactForm.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     document.getElementById('nameContact').value = ''
//     document.getElementById('emailConctact').value = ''
//     document.getElementById('message').value = ''
// })