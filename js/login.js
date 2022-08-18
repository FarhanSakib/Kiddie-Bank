// step-1 add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('Submit button clicked');
    // step-2 get the email address inside the email input field
    // IMPORTANT rememer to use .value in order to get value from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //    step-3 get the password
    // 3.a set id on the password element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    // step-4 verify email and password  (usally done on server side will learn later)
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid user');
    };
});