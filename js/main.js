
var triviaQ = [
	{ 
		question: "What is the name of the seventh planet from the sun?",
		answer: "Uranus"
	},
	{ 
		question: "What is the diameter of Earth?",
		answer: "8000 miles"
	},
	{ 
		question: "When did the Cold War end?",
		answer: "1989"
	},
	{ 
		question: "In which film did Humphrey Bogart say, 'We'll always have Paris?'",
		answer: "Casablanca"
	},
	{ 
		question: "Which Shakespeare play features Shylock?",
		answer: "The Merchant of Venice"
	},
	{ 
		question: "Which bulbs were once exchanged for currency?",
		answer: "tulips"
	},
	{ 
		question: "What color is Absynthe?",
		answer: "green"
	},
	{ 
		question: "Which chess piece can only move diagonally?",
		answer: "bishop"
	},
	{ 
		question: "What colour jersey is worn by the winners of each stage of the Tour De France?",
		answer: "yellow"
	},
	{ 
		question: "What is the name of the world's largest island?",
		answer: "Greenland"
	}
];


for(i=0; i<triviaQ.length; i++){
	newH4 = document.createElement('H4');
	newInput = document.createElement('INPUT');

	newText = document.createTextNode(triviaQ[i].question);
	newH4.appendChild(newText);

	newInput.id = "answer" + i;

	quiz.appendChild(newH4);
	quiz.appendChild(newInput);
}

function quizResults() {
	var correct=0;
	var incorrect=0;

	for(i=0; i<triviaQ.length; i++){
		var userInput = document.getElementById('answer' + i.toString()).value;
		if(userInput == triviaQ[i].answer){
			console.log("correct");
			correct++;
		}
		else{
			console.log("incorrect");
			incorrect++;
		}
	}
	newH1 = document.createElement('H1');

	var scoreAnswers = document.getElementById('scoreHidden'); 
	console.log(scoreAnswers);
	scoreAnswers.setAttribute('id', 'scoreVisible');

	var scoreText = document.createTextNode(xxxxx);
	newH1.appendChild(scoreText);

	scoreAnswers.id = 'answer' + i.toString();
	scoreHidden.appendChild(scoreAnswers);
}






