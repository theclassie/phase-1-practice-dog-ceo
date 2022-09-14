

document.addEventListener("DOMContentLoaded", () => {
    getDogs()

})

function getDogs(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
    return fetch(imgUrl)
    .then(response => response.json())
    .then(response => { 
        const dogImageContainer = document.getElementById("dog-image-container")
        response.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    }) 
    
}

function getBreeds() {

    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl) 
    .then(response => response.json())
    .then(response => {
        const breeds = Object.keys(response.message)
        const ul = document.querySelector("#dog-breeds")
        breeds.map(breed => {
            const li = document.createElement("li")
            li.textContent = breed
            ul.append(li)


        })    })
}




getDogs()
getBreeds()