function postChat() {
	// create a P tag to become the post
	let userPost = document.createElement( "P" );
	// Get the "userInput" from the form 
	let userContent = document.getElementById( "userInput" ).value;
	
	//set the userInput as content
	let userText = document.createTextNode( userContent );
	
	// add that text to the P tag
	userPost.appendChild( userText );
	// give the P tag a class 
	userPost.classList.add( "userPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( userPost );
	

	// this calls the function after 3 sec.
	setTimeout( botAnswer, 3000 );
}

function botAnswer() {
	//calls the fetchData function here
	fetchData();
}


// this API has lorem ipsum text, but with meat and puns (becaus dogs loves it)
const fetchUrl = "https://baconipsum.com/api/?type=meat-and-filler";



function fetchData(){
	fetch(fetchUrl).then(response => response.json()).then(data => useTheData(data));
	
}


// This is just a normal function that has an argument 
function useTheData(data) {
	// lets print the data we just sent here.
	console.log(data);
	
	
	// its an Array so lets try and get one of then out
	console.log(data[0]);
	
	//going to be lazy and just use one of them
	
	//pretty much the same code as the first bot had
	
	// create a P tag to become the post
	let botPost = document.createElement( "P" );
	

	
	//but now we use the data instead
	let randomText = data[0];
	
	
	
	//set the text as content
	let botText = document.createTextNode( randomText );
	// add that text to the P tag
	botPost.appendChild( botText );
	// give the P tag a class for the bot
	botPost.classList.add( "botPost" );
	
	// get the chatWindow and add the Post to it
	document.getElementById( "chatWindow" ).appendChild( botPost );

}


