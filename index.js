//Grab the DOMs
const inputValue = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")


//run function onclick
convertBtn.addEventListener("click",function (){
    const value = +(inputValue.value)//convert value to number
    
    length.textContent = `${value} meters = ${(value*3.281).toFixed(3)} feet |
    ${inputValue.value}  feet = ${(value/3.281).toFixed(3)} meters`; 
    
    volume.textContent =  `${value} liters = ${(value*0.264).toFixed(3)} Gallons | ${inputValue.value}Gallons = ${(value/0.264).toFixed(3)} Liters`;
    
    mass.textContent = `${value} Kilograms = ${(value*2.204).toFixed(3)} Pounds | ${inputValue.value} Pounds = ${(value/2.204).toFixed(3)} Kilograms`;
})


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/