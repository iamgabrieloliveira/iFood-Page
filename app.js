const MensageBox = document.querySelector('.cupons-container');
const CloseButton = document.querySelector('.close-cupom');
 
CloseButton.addEventListener('click', CloseMessage)

function CloseMessage(){
    MensageBox.style.display = "none";
}
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function ShowCupom(){
    await sleep(1000);
    MensageBox.style.visibility = 'visible';
    MensageBox.style.height = '120px'; 
    MensageBox.style.opacity = '1';
}
function scrollTo(element) {
    document.querySelector(element).scrollIntoView( {behavior: "smooth"});
}
document.querySelector(".go-to-up").addEventListener("click", function(event){
    event.preventDefault();
    scrollTo('.first-section');
})

//menu hamburguer

const MenuHamburguer = document.querySelector('.menu-hamburguer');
const header = document.querySelector('.cabecalho');

MenuHamburguer.addEventListener('click', MenuToggle);

function MenuToggle(){
    MenuHamburguer.classList.toggle('active');
    header.classList.toggle('active');
}
