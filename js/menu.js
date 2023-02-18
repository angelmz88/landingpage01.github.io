// Menu settings

const togglebtn = document.querySelector('.toggle-menu');
const ul = document.querySelector('.nav-ul');
const header = document.querySelector('header');

togglebtn.addEventListener ('click', ()=>{
    ul.classList.toggle('active');
    header.classList.toggle('responsive');
});

// Form settings

const formInput = document.querySelector(".form-item");
const formAarea = document.querySelector(".form-area");
const formBtn = document.querySelector(".form-button");

formBtn.addEventListener('click', () =>{
    if (formInput.value != " " && formAarea.value != " "){
        alert("The form can't be empty");
    } else {
        alert("Your message have been sent");
    }
});