let navButton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');

navButton.addEventListener('click', toggleNav)
function toggleNav(){
    navButton.classList.toggle('nav-button-clicked');
    nav.classList.toggle('nav-active');
}

let clearButton = document.querySelector('.clear-btn');
let removeButton = document.querySelectorAll('.phone-overlay button');
let binButton =  document.querySelectorAll('.phone-overlay button');

// for(let i = 0; i < phones.length; i++){
//     binButton[i].addEventListener('click', removeElement(i))
// }
// function removeElement(i){
//         phones[i].remove();
// }

clearButton.addEventListener('click', removeAllElements);


function removeAllElements(i){
    for(let i =0; i < phones.length; i++){
        phones[i].remove()
    }
}


let dropdownSwitch = document.querySelector('.dropdown-switch');
let  toggleArrow = document.querySelector('.dropdown-arrow');
dropdownSwitch.addEventListener('click', toggleDropdown);

function toggleDropdown(){
    toggleArrow.classList.toggle('dropdown-arrow-active');

}


function phoneFilter(){
    let input, filter, wishlist, phones, phoneContainers, i, txtValue;
    input = document.querySelector("#phone-filter");
    filter = input.value.toUpperCase();
    wishlist = document.querySelector(".wishlist");
    phones = document.querySelectorAll(".phone-model");
    phoneContainers = document.querySelectorAll('.phone-container')

    for (i = 0; i < phones.length; i++) {
        txtValue = phones[i].textContent || phones[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            phoneContainers[i].style.display = "";
        } else {
            phoneContainers[i].style.display = "none";
        }
    }
}