let nameInput;
let emailInput;
let phoneNumberInput;
let companyInput;
let isValidForm = false;

const validator = (element) => {
    const value = element.value.trim();

    if(!Boolean(value)) {
        isValidForm = false;
        element.classList.add('border-red-600', 'error-input')
    } else {
        isValidForm = true;
        element.classList.remove('border-red-600', 'error-input');
    }
};

const reset = (element) => {
    element.classList.remove('border-red-600', 'error-input');
    element.value = '';
};

const submitHandler = event => {
    event.preventDefault();
    console.log('hello')

    const name = nameInput.value.trim();
    const email = nameInput.value.trim();
    const phoneNumber = nameInput.value.trim();
    const company = nameInput.value.trim();

    validator(nameInput)
    validator(emailInput)
    validator(phoneNumberInput)
    validator(companyInput)

    if(isValidForm) {
        reset(nameInput)
        reset(emailInput)
        reset(phoneNumberInput)
        reset(companyInput)
        location.href = './index.html'
    }
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