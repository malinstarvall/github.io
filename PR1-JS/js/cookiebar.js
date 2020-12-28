// COOKIEBANNER
   function showToggle() {

	// gets the tag that has the ID
	var divEle = document.getElementById("hide");

	// check it is display none
	if (divEle.style.display === "none") {
		// if it is, make it display block
		divEle.style.display = "block";
	} else {
		// if no make it display none
		divEle.style.display = "none";
	}

}