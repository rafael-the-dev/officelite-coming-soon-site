let dropDownList;
let dropdownButton;

const buttonClickHandler = () => {
    dropDownList.classList.toggle('hidden');
};

window.addEventListener('load', () => {
    dropDownList = document.querySelector('[data-dropdown-list]');
    dropdownButton = document.querySelector('[data-dropdown-toggle]');
    console.log(dropdownButton)

    dropdownButton.addEventListener('click', buttonClickHandler)
})