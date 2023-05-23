
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();

    if(firstName === ''){
        addError(fname, 'First Name cannot be empty');
    } else {
        addSuccess(fname);
    }

    if(lastName === ''){
        addError(lname, 'Last Name cannot be empty');
    } else {
        addSuccess(lname);
    }

    if(emailVal === ''){
        addError(email, 'Email Address cannot be empty');

    } else if (!isValidEmail(emailVal)) {
        addError(email, 'Looks like this is not a valid email');
      }
    else {
        addSuccess(email);
    }

    if(passwordVal === ''){
        addError(password, 'Password cannot be empty');
    } else {
        addSuccess(password);
    }
});

function addError(field, message){
    const controlForm = field.parentElement;
    const em = controlForm.querySelector('em');
    em.innerText = message;
    field.classList.add('error');
    em.classList.add('error-msg');

}

function addSuccess(field){

    field.classList.add('success');
    
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

