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
})

searchText.addEventListener('change',(event)=>{
    searchText.value = event.target.value.trim().toLowerCase()
    console.log(searchText.value)
})
search.addEventListener('click', ()=>{
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => travelResult = data)
    .catch(error => console.error(error))
    {
        if('beaches'.includes(searchText.value )){
            data.beaches.filter(beache => travelResult.push(beache))
        }else if('temples'.includes(searchText.value )){
            data.beaches.filter(beache => travelResult.push(beache))
        }else{
          const country =  data.countries.find(country => country.name === searchText.value)
          travelResult.push(country)
        }
        if(travelResult.cities){
            travelResult.cities.forEach(city =>{
                let div = document.createElement('div')
                div.classList.add('view')
                div.innerHTML = `<img src='${city.imageUrl}'>
                <p>${city.name}</p>
                <p>${city.description}</p>`
                searchDiv.appendChild(div)
                searchDiv.classList.toggle('show hidden')
                
            })
        }else{
            travelResult.forEach(city =>{
                let div = document.createElement('div')
                div.classList.toggle('view')
                div.innerHTML = `<img src='${city.imageUrl}'>
                <p>${city.name}</p>
                <p>${city.description}</p>`
            
                searchDiv.appendChild(div)
                searchDiv.classList.toggle('show', 'hidden')
                
            })
        }

    }
    
})
// contactForm.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     document.getElementById('nameContact').value = ''
//     document.getElementById('emailConctact').value = ''
//     document.getElementById('message').value = ''
// })