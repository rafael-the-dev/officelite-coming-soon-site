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
        nameInput.classList.add('border-red-700')
    }

    if(!Boolean(email)) {
        isValidForm = false;
        emailInput.classList.add('border-red-700')
    }

    if(!Boolean(phoneNumber)) {
        isValidForm = false;
        phoneNumberInput.classList.add('border-red-700')
    }

    if(!Boolean(company)) {
        isValidForm = false;
        companyInput.classList.add('border-red-700')
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