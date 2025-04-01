document.addEventListener('DOMContentLoaded',function(){
    document.body.style.fontFamily="Aria,sans-serif"
    document.body.style.backgroundColor ="#f4f4f4"
    document.body.style.textAlign="center"

    let header = document.querySelector('header')
    header.style.backgroundColor="#ffcb05"
    header.style.padding='5rem'
    header.style.fontSize="2.5rem"
    header.style.color="#2a75bb"

    
    let searchBar = document.getElementById('search-bar')
    searchBar.style.margin= '2rem'

 let input = document.getElementById("search")
input.style.padding = "1rem"
input.style.width ="25rem"

let button = document.querySelector('.search-btn')
button.style.padding ="1rem 2rem"
button.style.backgroundColor='#2a75bb'
button.style.color ="white"
button.style.border="none"
button.style.cursor="pointer"

let grids = document.querySelectorAll('.grid')
grids.forEach(grid => {
    grid.style.display ="flex"
    grid.style.flexWrap ="wrap"
    grid.style.justifyContent ="center"
    grid.style.gap="2rem"
    grid.style.padding ="3rem"

})

let teamBuilder = document.querySelector('.team-builder')
teamBuilder.style.backgroundColor ="white"
teamBuilder.style.padding="4rem"
teamBuilder.style.margin="4rem auto"
teamBuilder.style.borderRadius ="2rem"
teamBuilder.style.boxShadow='0 0.5rem 1rem rgba(0,0,0,0.2)'
teamBuilder.style.maxWidth="50rem"
})
let saveButton = document.querySelector("#save-team")
saveButton.style.marginTop ="2rem"
















// window.alert('BORA CODAR!')

