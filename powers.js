// Add the correct string as the first argument to addEventListener()

let activateFlight=document.querySelector("#activate-flight")
// Write a function handle flight 
function flightHandlerFunction () {
    let flight= document.querySelector('#flight')
    flight.classList.remove('disabled')
    flight.classList.add('enabled')
}
activateFlight.addEventListener('click',flightHandlerFunction)

let activateMindreading=document.querySelector("#activate-mindreading")
// Write a function handle mindreading activate
function mindreadingHandlerFunction () {
    let mindreading= document.querySelector('#mindreading')
    mindreading.classList.remove('disabled')
    mindreading.classList.add('enabled')
}
activateMindreading.addEventListener('click',mindreadingHandlerFunction)

let activateXray=document.querySelector("#activate-xray")
// Write a function handle xray activate
function xrayHandlerFunction () {
    let xray= document.querySelector('#xray')
    xray.classList.remove('disabled')
    xray.classList.add('enabled')
}    
activateXray.addEventListener('click', xrayHandlerFunction)

let activateAll=document.querySelector('#activate-all')
// Write a function handle activate all
function activateAllHandlerFunction () {
    let activateAllSections= document.querySelectorAll('.disabled')
    activateAllSections.forEach(sectionElement=>{
        sectionElement.classList.remove('disabled')
        sectionElement.classList.add('enabled') 
    })
}
activateAll.addEventListener('click', activateAllHandlerFunction)

let deactivateAll=document.querySelector('#deactivate-all')
// Write a function handle deactivate all
function deactivateAllHandlerFunction () {
    let deactivateAllSections= document.querySelectorAll('.enabled')
    deactivateAllSections.forEach(sectionnElement=>{
        sectionnElement.classList.remove('enabled')
        sectionnElement.classList.add('disabled') 
    })
}
deactivateAll.addEventListener('click', deactivateAllHandlerFunction)