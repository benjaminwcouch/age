function ageInDays() {
    let question = prompt('How many years old are you ?');
    let answer = (question * 12 * 30);
    let h1 = document.createElement('h1')
    let textAnswer = document.createTextNode('You are ' + answer + ' days old')
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}  
 
function reset () {
    document.getElementById('ageIndays').remove();

}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=jpg&size=small";
    div.appendChild(image);
}

function rpsGame(yourChoice) {
    //console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()); // if answer is 0 will return rock if 1 will return paper 2 is scissors
    console.log('Computer choice:', botChoice);  // computer choice: rock
    results = decideWinner(humanChoice, botChoice); // rock, rock
    //console.log(results);
    console.log(humanChoice, botChoice);
    message = finalMessage(results); //{'message': you won!, 'color': 'green'}
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt(){ // calculate either 0, 1, 2 randomly
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number)  {
    return ['rock', 'paper', 'scissors'][number]; // number is 0, 1 or 2 it will return rock paper or scissor to function
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},  // if we choose rock and we get rock 0.5 we say tied
    'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0}, // from message below. We choose paper and 
    'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}, // 1 is the winner 0.5 is break even and 0 lose
    };
var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
    
}

function finalMessage([yourScore]) {

    if (yourScore === 0) {
return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message':'You tied!','color':'yellow'};
    }     else {
        return {'message': 'You won!', 'color': 'green'};
        }
}

function rpsFrontEnd(humanImageChoice, botImagechoice, finalMessage) {
    var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src,
    }

    // remove images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var messageDiv = document.createElement('div');
humanDiv.innerHTML = `<img src='${imagesDatabase[humanImageChoice]}' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>'`
messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
botDiv.innerHTML = `<img src='${imagesDatabase[botImagechoice]}'height=150 width=150 style=box-shadow: 0px 10px 50px rgba(243,38,24,1)'>'`

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);

}