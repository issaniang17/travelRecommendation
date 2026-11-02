let contactForm = document.getElementById('formContact')
let resultDiv = document.getElementById('resultDiv')
let travelResult = []
let searchDiv = document.getElementById('searchDiv')
let result = document.getElementById('description')
let search = document.getElementById('search')
let reset = document.getElementById('reset')
let searchText = document.getElementById('searchText')
console.log(searchText)

reset.addEventListener('click', ()=>{
    searchText.value = ''
    searchDiv.innerHTML = ''
})

searchText.addEventListener('change',(event)=>{
    searchText.value = event.target.value.trim().toLowerCase()
    
})
search.addEventListener('click', ()=>{
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        travelResult = data
        if('beaches'.includes(searchText.value)){
            const beaches = travelResult.beaches
            beaches.forEach(beach =>{
                let div = document.createElement('div')
                div.setAttribute('class', 'view')
                div.innerHTML =`<img src='${beach.imageUrl}'>
                <h2>${beach.name}</h2>
                <p>${beach.description}</p>`
                searchDiv.appendChild(div)
                searchDiv.classList.add('searchDiv')
                
            })
            resultDiv.classList.remove('hidden')
            
            
        }else if('temples'.includes(searchText.value)){
            const temples = travelResult.temples
            temples.forEach(temple =>{
                let div = document.createElement('div')
                div.setAttribute('class', 'view')
                div.innerHTML =`<img src='${temple.imageUrl}'>
                <h2>${temple.name}</h2>
                <p>${temple.description}</p>`
                searchDiv.appendChild(div)
                searchDiv.classList.add('searchDiv')

            })
            resultDiv.classList.remove('hidden')
        }else{
            const countries = travelResult.countries
            const country = countries.filter(countrie => countrie.name.toLowerCase() === searchText.value.toLowerCase())
            
            country.forEach(count =>{
                let div = document.createElement('div')
                div.innerHTML = ''
                div.innerHTML += `<h2>${count.name}</h2>`
                count.cities.forEach(city =>{
                    console.log(city)
                    div.innerHTML += `<img src='${city.imageUrl}'>
                    <h2>${city.name}</h2>
                <p>${city.description}</p>`
                })
                
                searchDiv.appendChild(div)

            })
            resultDiv.classList.toggle('hidden')
        }
    })
    .catch(error => console.error(error))
    
})
// contactForm.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     document.getElementById('nameContact').value = ''
//     document.getElementById('emailConctact').value = ''
//     document.getElementById('message').value = ''
// })