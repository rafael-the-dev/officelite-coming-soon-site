let nameInput;
let emailInput;
let phoneNumberInput;
let companyInput;
let isValidForm = false;

const submitHandler = event => {
    event.preventDefault();
    console.log('hello')

    const name = nameInput.value.trim();
    const email = nameInput.value.trim();
    const phoneNumber = nameInput.value.trim();
    const company = nameInput.value.trim();

    if(!Boolean(name)) {
        isValidForm = false;
    }

    if(!Boolean(email)) {
        isValidForm = false;
    }

    if(!Boolean(phoneNumber)) {
        isValidForm = false;
    }

    if(!Boolean(company)) {
        isValidForm = false;
    }

    console.log('is valid form', isValidForm);
};

const start = () => { 
    nameInput = document.querySelector('[data-input-name]');
    emailInput = document.querySelector('[data-input-email]');
    phoneNumberInput = document.querySelector('[data-input-phone-number]');
    companyInput = document.querySelector('[data-input-company]');

    const form = document.querySelector('[data-form]');
    form.addEventListener('submit', submitHandler);
};

window.addEventListener('load', start);