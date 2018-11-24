
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
	var newH4 = document.createElement('H4');
	var newInput = document.createElement('INPUT');
	var newText = document.createTextNode(triviaQ[i].question);

	newH4.appendChild(newText);

	newInput.id = "answer" + i;

	quiz.appendChild(newH4);
	quiz.appendChild(newInput);
}

function resetQuiz() {
	document.getElementById('scoreboard').textContent= "";

	var allInputs = document.getElementsByTagName('input');
	for(var i = 0; i < allInputs.length; i++){
		allInputs[i].value="";
	}
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
	
	var correctH1 = document.createElement('H1');
	var incorrectH1 = document.createElement('H1');
	var scoreAnswers = document.getElementById('scoreboard'); 

	var correctText = document.createTextNode('Correct: ' + correct);
	var incorrectText = document.createTextNode('Incorrect: '+ incorrect);

	correctH1.appendChild(correctText)
	incorrectH1.appendChild(incorrectText)

	scoreAnswers.appendChild(correctH1)
	scoreAnswers.appendChild(incorrectH1)

	scoreAnswers.className = 'scoreVisible';

}








