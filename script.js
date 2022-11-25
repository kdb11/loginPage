const mainForm = document.getElementById("mainForm");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

var objectUsers = [
	{
		username: "janne",
		password: "test"
	}
,
	{
		username: "albin",
		password: "1234"
	}
,
	{
		username: "erika",
		password: "tesla"
	}
]

loginBtn.addEventListener("click", function login() {
	
	var username = document.getElementById('username').value
	
	var password = document.getElementById('password').value

    for(var i = 0; i < objectUsers.length; i++) {
		
		if( username == objectUsers[i].username && password == objectUsers[i].password) {
            
			document.body.style.backgroundImage = "url('Assets/windowsBackground.jpg')";
			
			document.getElementById("welcomeMsg").innerHTML = ("Welcome" + " " +username);
			
			mainForm.style.display = "none";
			
			logoutBtn.style.display = "block";

			localStorage.setItem("objectUsers", JSON.stringify(objectUsers));

			localStorage.setItem("username", JSON.stringify(username));
			
			break

		} else {
			
			document.getElementById("errorMsg").innerHTML = "Incorrect username or password";
			
			setTimeout(function(){
				document.getElementById("errorMsg").innerHTML = "";}, 700);
		}
	}
});

if(localStorage.getItem("objectUsers") !== null) {

	var username = localStorage.getItem("username", );

	document.body.style.backgroundImage = "url('Assets/windowsBackground.jpg')";
	
	document.getElementById("welcomeMsg").innerHTML = ("Welcome" + " " + username.substring(1,6));
	
	mainForm.style.display = "none";
	
	logoutBtn.style.display = "block";

}

logoutBtn.addEventListener("click", function logout() {

    document.body.style.backgroundImage = "url('Assets/animatedWindows.gif')";
	
	mainForm.style.display = "block";
	
	logoutBtn.style.display = "none";
	
	document.getElementById("welcomeMsg").innerHTML = ("Welcome");
	
	document.getElementById("errorMsg").innerHTML = "";

	document.getElementById("mainForm").reset();

	localStorage.clear();

});
