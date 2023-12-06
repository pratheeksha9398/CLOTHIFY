//function to validate form
function validateForm() {
    //getting the values 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Checking email and password
    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again!');
    }

    // Prevent form submission
    return false;
}