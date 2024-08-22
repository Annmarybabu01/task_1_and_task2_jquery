//disable future dates
function setMaxDate() {
    // Get today's date
    let todayDate = new Date();
    let month = todayDate.getMonth() + 1; // Months are zero-based, so add 1-(0 for January, 1 for February, etc.), 
    let year = todayDate.getFullYear(); // Use getFullYear() for four-digit year
    let tdate = todayDate.getDate(); // Get the day of the month
    // Format month and date with leading zeros if needed
    if (month < 10) {
        month = "0" + month;
    }
    if (tdate < 10) {
        tdate = "0" + tdate;
    }
    // Create the maxDate string in YYYY-MM-DD format
    let maxDate = year + "-" + month + "-" + tdate;
    // Log maxDate to the console to verify it
    console.log(maxDate);
    // Set this as the max attribute for the date input using jQuery
    $('#dateOfBirth').attr('max', maxDate);
}
$(document).ready(function() {
    // Initially disable the login button
    $('#signUpButton').prop('disabled', true);

    //first name validation 
    let firstNameValid = false;
    $('#firstName').on('input focusin focusout', function() {
        validateFirstName();
        updateFloatingLabel($(this));
    });
    function validateFirstName() {
        let firstName = $('#firstName').val();
        let firstNamePattern = /^[A-Za-z]{3,}$/;
        if (!firstNamePattern.test(firstName) || firstName === "") {
            $('#firstNameErrorMessage').show();
            $("#firstName").css("border-color", "red");
            firstNameValid = false;
        } else {
            $('#firstNameErrorMessage').hide();
            $("#firstName").css("border-color", "green");
            firstNameValid = true;
        }
        toggleSubmitButton();
    }

    //second name validation 
    let secondNameValid = false;
    $('#secondName').on('input focusin focusout', function() {
        validateSecondName();
        updateFloatingLabel($(this));
    });
    function validateSecondName() {
        let secondName = $('#secondName').val();
        let secondNamePattern = /^[A-Za-z]{1,}$/;
        if (!secondNamePattern.test(secondName) || secondName === "") {
            $('#secondNameErrorMessage').show();
            $("#secondName").css("border-color", "red");
            secondNameValid = false;
        } else {
            $('#secondNameErrorMessage').hide();
            $("#secondName").css("border-color", "green");
            secondNameValid = true;
        }
        toggleSubmitButton();
    }

    //date validation
    let dateValid = false;
        $('#dateOfBirth').on('input focusin focusout', function() {
            validateDateOfBirth();
            updateFloatingLabel($(this));
        });
    function validateDateOfBirth() {
        const $dateOfBirth = $('#dateOfBirth');
        const $dateOfBirthError = $('#dateOfBirthErrorMessage');
        const today = new Date();
        const selectedDate = new Date($dateOfBirth.val());
        // Clear previous error messages and styling
        $dateOfBirthError.hide().text('');
        $dateOfBirth.css('border-color', '');
        // Calculate age
        let age = today.getFullYear() - selectedDate.getFullYear();
        const monthDifference = today.getMonth() - selectedDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < selectedDate.getDate())) {
            age--;
        }
        // Check if the input value is a valid date
        if (isNaN(selectedDate.getTime())) {
            $dateOfBirthError.text('Please select a valid date').show();
            $dateOfBirth.css('border-color', 'red');
            dateValid = false;
        }
        // Check if the date is in the future
        else if (selectedDate > today) {
            $dateOfBirthError.text('Date cannot be in the future').show();
            $dateOfBirth.css('border-color', 'red');
            dateValid = false;
        }
        // Check if the user is at least 18 years old
        else if (age < 18) {
            $dateOfBirthError.text('You must be at least 18 years old').show();
            $dateOfBirth.css('border-color', 'red');
            dateValid = false;
        }
        // If all checks pass
        else {
            $dateOfBirthError.hide();
            $dateOfBirth.css('border-color', 'green');
            dateValid = true;
        }
        toggleSubmitButton();
    }
    
    //phone number validation 
    let phoneNumberValid = false;
    $('#phoneNumber').on('input focusin focusout', function() {
        validatePhoneNumber()
        updateFloatingLabel($(this));
    });
    function validatePhoneNumber() {
        let phoneNumber = $('#phoneNumber').val();
        let phoneNumberPattern = /^\+1\(\d{3}\)\d{3}-\d{4}$/;
        if (!phoneNumberPattern.test(phoneNumber) || phoneNumber === "") {
            $('#phoneNumberErrorMessage').show();
            $("#phoneNumber").css("border-color", "red");
            phoneNumberValid = false;
        } else {
            $('#phoneNumberErrorMessage').hide();
            $("#phoneNumber").css("border-color", "green");
            phoneNumberValid = true;
        }
        toggleSubmitButton();
    }

    //email validation
    let emailValid = false;
    // Email validation and floating label update
    $('#email').on('input focusin focusout', function() {
        validateEmail();
        updateFloatingLabel($(this));
    });
    // function to validate mail
    function validateEmail() {
        let email = $('#email').val();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com)$/;
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

    //adreess validation
    var addressValid = false;
    $('#address').on('input focusin focusout', function() {
        validateAddress();
        updateFloatingLabel($(this));
    });
    function validateAddress() {
        let address = $('#address').val();
        let addressPattern = /^[a-zA-Z0-9.:,\s]{3,}$/;
        if (!addressPattern.test(address) || address === "") {
            $('#addressErrorMessage').show();
            $("#address").css("border-color", "red");
            addressValid = false;
        } else {
            $('#addressErrorMessage').hide();
            $("#address").css("border-color", "green");
            addressValid = true;
        }
        toggleSubmitButton();
    }

    //username validation
    var userNameValid = false;
    $('#userName').on('input focusin focusout', function() { // to attach even handklers to element
        validateUserName();
        updateFloatingLabel($(this));
    });
    function validateUserName() {
        let userName = $('#userName').val();
        let userNamePattern = /^[a-zA-Z0-9_]{3,15}$/;
        if (!userNamePattern.test(userName) || userName === "") {
            $('#userNameErrorMessage').show();
            $("#userName").css("border-color", "red");
            userNameValid = false;
        } else {
            $('#userNameErrorMessage').hide();
            $("#userName").css("border-color", "green");
            userNameValid = true;
        }
        toggleSubmitButton();
    }
    
    //validate password
    var passwordValid = false;
    $('#password').on('input focusin focusout', function() {
        validatePassword();
        updateFloatingLabel($(this));
    });
    function validatePassword() {
        let password = $('#password').val();
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
    
    //confirm password
    let confirmPasswordValid = false;
    $('#confirmPassword').on('input focusin focusout', function() {
        validateConfirmPassword();
        updateFloatingLabel($(this));
    });
    function validateConfirmPassword() {
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();
        if (password === confirmPassword && password.length > 0) {
            $("#doNotMatchMessage").hide();
            $("#matchMessage").show();
            $("#confirmPassword").css("border-color", "green");
            confirmPasswordValid = true;
        } else {
            $("#confirmPassword").css("border-color", "red");
            $("#doNotMatchMessage").show();
            $("#matchMessage").hide();
            confirmPasswordValid = false;
        }
        toggleSubmitButton();
    }

    //city options
    $(document).ready(function() {
        // Define the cities for each state
        const citiesByState = {
            kerala: ["Thiruvananthapuram", "Kochi", "Kollam", "Calicut"],
            tamilnadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"]
            // Add more states and their cities here
        };
        // Handle state dropdown change event
        $('#state').change(function() { //When the state dropdown (#state) value changes, it triggers the change event handler.
            //The selected state value is retrieved using $(this).val().
            const selectedState = $(this).val();//to retreive value
            const $citySelect = $('#city'); //to refer
            // Clear existing options in the city dropdown
            $citySelect.empty().append('<option value="">Select a city</option>');
            // If a valid state is selected, populate the city dropdown
            if (selectedState && citiesByState[selectedState]) {
                citiesByState[selectedState].forEach(function(city) {
                    // Format city value and append to city dropdown
                    const value = city.toLowerCase().replace(/\s+/g, '-');
                    $citySelect.append(`<option value="${value}">${city}</option>`);
                });
            }
        });
    });

    // Enable/disable submit button based on form validity
    function toggleSubmitButton() { 
    //let phoneNumberValid = false;
    $('#signUpButton').prop('disabled', !(emailValid && passwordValid && firstNameValid && secondNameValid && 
        phoneNumberValid && userNameValid && addressValid && dateValid));
    }

    //for floating
    function updateFloatingLabel(input) {
        let label = input.siblings('label');
        if (input.val() || input.is(':focus')) {
            label.stop().animate({
                top: '5px', // Floating position
                fontSize: '12px', // Smaller font size when floating
            }, 300);
            input.stop().animate({
                borderWidth: '3px' // Increase border size when floating
            }, 300);
        } else {
            label.stop().animate({
                top: '14px', // Default position
                fontSize: '16px', // Default font size
            }, 300);
            input.stop().animate({
                borderWidth: '2px' // Default border size
            }, 300);
        }
    }
});

