$(document).ready(function() {

    // Initialize validity variables
    var emailValid = false;
    var passwordValid = false;
    // Initially disable the login button
    $('#loginButton').prop('disabled', true);
    // Initialize floating labels
    initializeFloatingLabels();
    // Email validation and floating label update
    $('#email').on('input focusin focusout', function() {
        validateEmail();
        updateFloatingLabel($(this));
    });
    // Password validation and floating label update
    $('#password').on('input focusin focusout', function() {
        validatePassword();
        updateFloatingLabel($(this));
    });
    // Validate email function
    function validateEmail() {
        var email = $('#email').val();
        var emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com)$/;
        if (!emailPattern.test(email) || email === "") {
            $('#emailErrorMessage').show();
            $("#email").css("border-color", "red");
            emailValid = false;
        } else {
            $('#emailErrorMessage').hide();
            $("#email").css("border-color", "green");
            emailValid = true;
        }
        toggleSubmitButton();
    }
    // Validate password function
    function validatePassword() {
        var password = $('#password').val();
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password) || password === "") {
            $('#passwordErrorMessage').show();
            $("#password").css("border-color", "red");
            passwordValid = false;
        } else {
            $('#passwordErrorMessage').hide();
            $("#password").css("border-color", "green");
            passwordValid = true;
        }
        toggleSubmitButton();
    }
    // Enable/disable submit button based on form validity
    function toggleSubmitButton() { 
        $('#loginButton').prop('disabled', !(emailValid && passwordValid));
    }
    // Update floating label based on input value and focus state
    function updateFloatingLabel(input) {
        var label = input.siblings('label');
        if (input.val() || input.is(':focus')) {
            label.stop().animate({
                top: '5px', // Floating position
                fontSize: '12px', // Smaller font size when floating
                color: 'black'
            }, 300);
            input.stop().animate({
                borderWidth: '3px' // Increase border size when floating
            }, 300);
        } else {
            label.stop().animate({
                top: '14px', // Default position
                fontSize: '16px', // Default font size
                color: 'black'
            }, 300);
            input.stop().animate({
                borderWidth: '2px' // Default border size
            }, 300);
        }
    }
    // Initialize floating labels on page load
    function initializeFloatingLabels() {
        $('#email, #password').each(function() {
            updateFloatingLabel($(this));
        });
    }
});



