const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let color = document.querySelector('.color')
let btn = document.querySelector('#btn')

btn.addEventListener('click',function(){
let  randomNumber = getRandomNumber()

document.querySelector('body').style.backgroundColor = colors[randomNumber]
color.textContent= colors[randomNumber]
})


const getRandomNumber = function(){
    return Math.floor(Math.random()*colors.length)
} 