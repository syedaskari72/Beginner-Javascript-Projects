//calling class using deduced in html by querySelector 
const panels = document.querySelectorAll('.panel')

//making a function inwhich adding click property using eventListeners
panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        //adding the class active using classlist
        removeActiveClasses()
        panel.classList.add('active');
    })
})

//making remove function 
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}