// COOKIEBANNER
     function makeCookie() {
	// this is how you make a cookie
	// its a way to save strings in for a "site"
	document.cookie = "username=Marcus";
	// 
	//	By default, the cookie is deleted when the browser is closed
	// 	add the expires tag with a date to set how long the cookie show last
	console.log("make cookie");
	
}

function getCookie() {
	// this is how you can get a cookie
	let cookie = document.cookie;
	// print it
	console.log(cookie);
	// get the value of the username out
	console.log(cookie.split("=")[1]);
	// split it on the "=" and use the second part
	// put it somewhere on a page
	document.getElementById("putThatCookieDown").innerHTML = cookie.split("=")[1];
}
© 2020 GitHub, Inc.