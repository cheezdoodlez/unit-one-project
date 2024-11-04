
let cookieClicks = 0
let cookieReset = 0

const clearCookies= () => {
    cookieClicks= 0;
}
const buttonElement = document.querySelector('#buttonOne');
const displayElement = document.getElementById('display')   
const buttonElementTwo = document.querySelector('#buttonTwo')

buttonElement.addEventListener('click',()=> {
    console.log(`${cookieClicks++}`);
    displayElement.textContent = `Cookies: ${cookieClicks}`;
}) 

buttonElementTwo.addEventListener('click',()=> {
    displayElement.textContent =(`Cookies: ${cookieReset}`);
    clearCookies()
})
// add reset button next DONE//
// fix reset to 0 issue DONE//
