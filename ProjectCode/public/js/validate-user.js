//  ***
//  important: event.preventDefault() might cause troubles when implementing back-end validations
//  just comment them out then
//
//  regular expression for email incase if we changed our mind
//  var regex_email = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
//  ***
function LogInForm(event) {

    event.preventDefault();
    var valid = true;

    var elements = event.currentTarget;
    var l_uname = elements[0].value;
    var l_password = elements[1].value;

    var regex_l_uname = /^[a-zA-Z]+$/
    var regex_l_password = /^\S*$/;

    var msg_l_uname = document.getElementById("msg_l_uname");
    var msg_l_password = document.getElementById("msg_l_password");
    msg_l_uname.innerHTML = "";
    msg_l_password.innerHTML = "";

    var textNode;

    if (l_uname == null || l_uname == "") {
        textNode = document.createTextNode("User name is empty.");
        msg_l_uname.appendChild(textNode);
        valid = false;
    }
    else if (regex_l_uname.test(l_uname) == false) {
        textNode = document.createTextNode("Your user name should only contain letters and nothing else.");
        msg_l_uname.appendChild(textNode);
        valid = false;
    }
    if (l_password == null || l_password == "") {
        textNode = document.createTextNode("Password is empty.");
        msg_l_password.appendChild(textNode);
        valid = false;
    }
    else if (regex_l_password.test(l_password) == false) {
        textNode = document.createTextNode("Password is invalid.");
        msg_l_password.appendChild(textNode);
        valid = false;
    }
    else if (l_password.length < 8) {
        textNode = document.createTextNode("Password must be longer than 8 characters.");
        msg_l_password.appendChild(textNode);
        valid = false;
    }

    var display_info = document.getElementById("display_info");

    display_info.innerHTML = "";

    if (valid != true) {
        event.preventDefault();

        display_info.setAttribute("style", "color: red");
    }
}

function ResetForm(event) {
    document.getElementById("msg_l_uname").innerHTML = '';
    document.getElementById("msg_l_password").innerHTML = '';
}

function RegisterForm(event) {
    event.preventDefault();

    var valid = true;

    var elements = event.currentTarget;
    var uname = elements[0].value;
    var r_password = elements[1].value;
    var r_passwordc = elements[2].value;

    var regex_r_uname = /^[a-zA-Z]+$/;
    var regex_r_password = /.*[0-9].*/;

    var msg_r_uname = document.getElementById("msg_r_uname");;
    var msg_r_password = document.getElementById("msg_r_password");
    var msg_r_passwordc = document.getElementById("msg_r_passwordc");

    msg_r_uname.innerHTML = "";
    msg_r_password.innerHTML = "";
    msg_r_passwordc.innerHTML = "";

    var textNode;
    var htmlNode;

    if (uname == null || uname == "") {
        textNode = document.createTextNode("User name is empty.");
        msg_r_uname.appendChild(textNode);
        valid = false;
    }
    else if (regex_r_uname.test(uname) == false) {
        textNode = document.createTextNode("Your user name should only contain letters and nothing else.");
        msg_r_uname.appendChild(textNode);
        valid = false;
    }

    if (r_password == null || r_password == "") {
        textNode = document.createTextNode("Password is empty is empty.");
        msg_r_password.appendChild(textNode);
        valid = false;
    }
    else if (regex_r_password.test(r_password) == false) {
        textNode = document.createTextNode("Password is invalid. Be sure that you have included at least one non-letter character.");
        msg_r_password.appendChild(textNode);
        valid = false;
    }
    else if (r_password.length < 8) {
        textNode = document.createTextNode("Password must be longer than 8 characters.");
        msg_r_password.appendChild(textNode);
        valid = false;
    }
    if (r_passwordc == null || r_passwordc == "") {
        textNode = document.createTextNode("Password confirmation is empty.");
        msg_r_passwordc.appendChild(textNode);
        valid = false;
    }
    else if (r_passwordc !== r_password) {
        textNode = document.createTextNode("Password do not match with the Password Confirmation.");
        msg_r_passwordc.appendChild(textNode);
        valid = false;
    }

    var display_info = document.getElementById("display_info");
    display_info.innerHTML = "";
    if (valid == true) {
        document.getElementById("SignUp").reset();

    }

    else {
        event.preventDefault();

        display_info.setAttribute("style", "color: red");
    }
}

function ResetForm(event) {
    document.getElementById("msg_r_uname").innerHTML = '';
    document.getElementById("msg_r_password").innerHTML = '';
    document.getElementById("msg_r_passwordc").innerHTML = '';
}