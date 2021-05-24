console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", ()=> {
fetch("https://dog.ceo/api/breeds/image/random/4" )
.then(response=>response.json())
.then(data=> renderEach(data))

const renderEach=function(dataObject) {
    let dogContainer=document.querySelector("#dog-image-container")
    let dogArray= dataObject.message
    dogArray.forEach((element)=> {
        let img=document.createElement("img")
        img.src=element
        dogContainer.append(img)

    })

}

fetch("https://dog.ceo/api/breeds/list/all")
.then(response=> response.json())
.then(data=>(renderBreeds(data)))
const renderBreeds= function(dataObject) {
    const breedObject=dataObject.message
    const breedList=document.querySelector("#dog-breeds")
    for (const key in breedObject) {
        let item=document.createElement("li")
        item.textContent=key;
        breedList.append(item)
        item.addEventListener("click", ()=> {
            item.style.color="purple"
        })
    }   
}
 
 
    




})
