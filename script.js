const popup= document.querySelector('.popup-container')
const button= document.querySelector('.button')
const closeIcon= document.querySelector('.close-icon')
const overlay= document.querySelector('.overlay')
const subscribe= document.querySelector('.subscribe-bar')
const inputBar= document.querySelector('.input')
const errorLabel= document.querySelector('.error-label')
const originalPopup= document.querySelector('.popup')

button.addEventListener('click',()=>{
    popup.classList.add('popup-open')
})
button.addEventListener('click',()=>{
    originalPopup.classList.add('show')
})

button.addEventListener('click',()=>{
    popup.classList.add('button-press')

})
closeIcon.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})
closeIcon.addEventListener('click',()=>{
    popup.classList.remove('button-press')
})
subscribe.addEventListener('click',()=>{
    popup.classList.remove('button-press')
    popup.classList.remove('popup-open')
})
overlay.addEventListener('click',()=>{
    popup.classList.remove('popup-open')
})

if(inputBar.value){
errorLabel.style.display='inline';
}else{
    errorLabel.style.display='none'; 
}

