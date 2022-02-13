let nameInput;
let emailInput;
let phoneNumberInput;
let companyInput;

const submitHandler = event => {
    event.preventDefault();
    console.log('hello')
};

const start = () => { 
    nameInput = document.querySelector('[data-input-name]');
    emailInput = document.querySelector('[data-input-email]');
    phoneNumberInput = document.querySelector('[data-input-phone-number]');
    companyInput = document.querySelector('[data-input-company]');
    document.querySelector('[data-form]').addEventListener('submit', submitHandler);
    console.log(document.querySelector('[data-form]'))
};

window.addEventListener('load', start);