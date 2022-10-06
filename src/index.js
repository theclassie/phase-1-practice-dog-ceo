const randomDogImg = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", () => {
    fetchRandomDogImg()
})

fetchRandomDogImg(){
    fetch(randomDogImg)
    .then(res => res.json)
    .then(res => 
    //adds image to the DOM
    document.getElementById("dog-image-container")
    )
}