var greet = function (event_details) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var greeting_message = "Thank you for signing up, " + name + ". We will now bombard " + email + " with spam.";

    event_details.target.style.display = "none";

    var container = document.getElementById("signupformcontainer");
    container.innerHTML = "<p>" + greeting_message + "</p>";

    var welcome = document.getElementById("welcome");
    welcome.style.fontFamily = "Comic Sans MS";
    welcome.style.fontSize = "200%";
    welcome.style.color = "blue";

    event_details.preventDefault();
};


var form = document.getElementById("signupform");
form.addEventListener("submit", greet);


