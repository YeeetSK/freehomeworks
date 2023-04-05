function checkPassword() {
	// get the password input value
	var password = document.getElementsByName("password")[0].value;

	// check if the password is correct
	if (password === "samologin456") {
		// show the content
		document.getElementById("content").style.display = "block";

		// hide the login form
		document.getElementsByClassName("login-box")[0].style.display = "none";

		// prevent the form from submitting
		return false;
	} else {
		// display an error message
		alert("Nesprávne heslo, pre heslo napíš Olive na WhatsApp");
		
		// prevent the form from submitting
		return false;
	}
}
