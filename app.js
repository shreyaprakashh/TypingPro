var timer = document.getElementById("timer");
var timeRemaining = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;


var calculateScore = function() {
	var paraSubmitted = textArea.value;
	var submittedWords = paraSubmitted.split(" ");
	var wordCount = submittedWords.length; 

	var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);

	return wordCount;
};


var generatePassage = function(){
	
	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
	var passages = [passage1];
	testPara.innerHTML = passages[Math.floor(Math.random()*10/2)];

};

var displayTime = function () {

	var getTime = setInterval(function() {
		timeRemaining--;
		timer.innerHTML = "Time Remaining: " + timeRemaining + "s"; 

		console.log(timeRemaining);

		if(timeRemaining == 0){

			clearInterval(getTime);
			
			var wrapper = document.getElementById("wrapper");
			wrapper.remove();

			timer.remove();

			document.body.appendChild(newTestWindow);
			document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " words per minute.";
			newTestWindow.style.display = "block";
		} 
	}, 1000);

	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {
	
	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	generatePassage();

};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});


var passage1 = "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites. Web development is typically broken down into 3 core areas: Frontend, Backend, Full Stack Development.The Face of the Web. The part of a website where the user interacts directly is termed as front end. This involves designing the structure, layout, and behavior of the website It is also referred to as the ‘client side’ of the application.Frontend Technologies are HTML, CSS, JavaScript and BootStrap. HTML stands for HyperText Markup Language. It is used to design the front end portion of web pages using markup language. It acts as a skeleton for a website since it is used to make the structure of a website. Cascading Style Sheets fondly referred to as CSS is a simply designed language intended to simplify the process of making web pages presentable. It is used to style our website. JavaScript is a scripting language used to provide a dynamic behavior to our website. Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular CSS framework for developing responsive, mobile-first websites. Nowadays, the websites are perfect for all browsers (IE, Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones).";
