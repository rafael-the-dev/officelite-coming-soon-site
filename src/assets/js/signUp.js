let dropDownList;
let dropdownButton;
let selectedItem;

const listKeys = {
    'basic-pack': '<span class="blue-color font-bold capitalize">Basic pack</span> Free',
    'pro-pack': '<span class="blue-color font-bold capitalize">Pro ack</span> Free',
    'ultimate-pack': '<span class="blue-color font-bold capitalize">Ultimate pack</span> Free'
}

const buttonClickHandler = () => {
    dropDownList.classList.toggle('hidden');
};

const listItemClickHandler = prop => () => {
    selectedItem.innerHTML = listKeys[prop];
    dropDownList.classList.add('hidden');
};

window.addEventListener('load', () => {
    dropDownList = document.querySelector('[data-dropdown-list]');//
    dropdownButton = document.querySelector('[data-dropdown-toggle]');
    selectedItem = document.querySelector('[data-dropdown-selected-item]');
    console.log(selectedItem)

    dropdownButton.addEventListener('click', buttonClickHandler)
    document.querySelectorAll('[data-dropdown-list-item]').forEach(element => {
        element.addEventListener('click', listItemClickHandler(element.getAttribute('data-dropdown-list-item')))
    })
})