/* Selecting elements */

let inputElements = document.querySelectorAll('.input input');
// all inputs selected (1st name, last name, email and message), except textarea and checkbox

let email = document.querySelector('.email-input input');

let textArea = document.querySelector('.input textarea');
// textarea selected

let checkBox = document.querySelector('.checkbox input');
// textarea selected

let allInputElements = [
                        ...inputElements, 
                        textArea,
                        document.querySelector('.checkbox input'),
                        ...document.querySelectorAll('.choices .choice input')
                        ];



let submitButton = document.querySelector('#submit-button');

let emailRegex = /\w+@\w+.\w+/ig;

/* Handling click event */

submitButton.addEventListener('click', () => {

    document.querySelector('.choices').parentNode.classList.remove('false');

    allInputElements.forEach(i => {
        i.parentNode.classList.remove('false');
        
        if (i.value === '') {
            i.parentNode.classList.add('false');
        }
    });
    
    if (!email.value.match(emailRegex)) {
        email.parentNode.classList.add('false');
    } else if (textArea.value === ''){
        textArea.parentNode.classList.add('false');
    } else if (checkRadioBoxes() === false) {
        document.querySelector('.input.radio').classList.add('false');
    } else if (agreeTerms() === false) {
        document.querySelector('.checkbox').classList.add('false');
    } else {
        document.querySelector('.message-sent').classList.add('active');
        setTimeout(() => {
            document.querySelector('.message-sent').classList.remove('active');
        }, 3000);
        clearFormFields();
    }
    
});

/* Function to clear form */
function clearFormFields() {

    allInputElements.forEach(el => el.value = '');
    document.querySelector('.checkbox input').checked = false;
    document.querySelectorAll('.choices .choice input').forEach(i => i.checked = false);

}

/* Function to check radio boxes */
function checkRadioBoxes() {
    let test = false;
    document.querySelectorAll('.choices .choice input').forEach(i => {
        if (i.checked) {
            test = true;
        }
    });
    return test;
}

/* Function to agree terms*/
function agreeTerms() {
    let test = false
    if (document.querySelector('.checkbox input').checked) {
        test = true;
    }
    return test;
}