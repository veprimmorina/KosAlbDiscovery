function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.myForm.name.value;
    var email = document.myForm.email.value;
    var password = document.myForm.password.value;
    var username = document.myForm.username.value;
    var mobile = document.myForm.mobile.value;

    var owner = document.myForm.owner.value;
    var fiscalnumber = document.myForm.fiscalnumber.value;
    var number = document.myForm.number.value;
    var businessActi = document.myForm("businessactivity").value;
    var statuss = "activ"
    var rolee = "business";



    var nameErr = emailErr = passwordErr = usernameErr = fiscalnumberErr = numberErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }
    // Validate password
    if (password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        // Regular expression for basic email validation
        var regex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        if (regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if (username == "") {
        printError("usernameErr", "Please enter your username");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(username) === false) {
            printError("usernameErr", "Please enter a valid username");
        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }

    if(mobile == "") {
        printError("mobileErr", "Please enter your phone number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit phone number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (owner == "") {
        printError("ownerErr", "Please enter your Owner ID");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(owner) === false) {
            printError("ownerErr", "Please enter a valid owner ID");
        } else {
            printError("ownerErr", "");
            ownerErr = false;
        }
    }

    if(fiscalnumber == "") {
        printError("fiscalnumberErr", "Please enter your fiscal number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(fiscalnumber) === false) {
            printError("fiscalnumberErr", "Please enter a valid 10 digit fiscal number");
        } else{
            printError("fiscalnumberErr", "");
            fiscalnumberErr = false;
        }
    }

    if(number == "") {
        printError("numberErr", "Please enter your business number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(number) === false) {
            printError("numberErr", "Please enter a valid 10 digit  business number");
        } else{
            printError("numberErr", "");
            numberErr = false;
        }
    }



    if ((nameErr || emailErr || passwordErr || usernameErr || mobileErr || ownerErr || fiscalnumberErr || numberErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Password: " + password + "\n" +
            "Username: " + username + "\n" +
            "Phone Number: " +mobile+ "\n" +
            "Owner ID: " + owner + "\n" +
            "Fiscal Number: " + fiscalnumber + "\n" +
            "Business Number: " + number + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        alert(dataPreview);
    }
};