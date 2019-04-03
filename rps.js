var hands = ['rock','paper','scissors']

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
}

var player1 = {
    name: 'Dude',
    hand: getHand(),
}

var player2 = {
    name: 'What',
    hand: getHand(),
}

var player3 = {
    name: 'Is',
    hand: getHand(),
}

var player4 = {
    name:'Who',
    hand: getHand(),
}

var playerOneWins = 0;
var playerTwoWins = 0;

function playRound(playerOne, playerTwo) {
    playerOne.hand;
    playerTwo.hand;
    console.log(playerOne.name + ' has ' + playerOne.hand);
    console.log(playerTwo.name + ' has ' + playerTwo.hand);
    if ((playerOne.hand == 'rock' && playerTwo.hand == 'scissors')||(playerOne.hand=='paper' && playerTwo.hand=='rock')||(playerOne.hand=='scissors'&&playerTwo.hand=='paper')) {
        console.log('The winner is ' + playerOne.name);
        playerOneWins = playerOneWins + 1;
    }
    else if ((playerTwo.hand == 'rock' && playerOne.hand == 'scissors')||(playerTwo.hand=='paper' && playerOne.hand=='rock')||(playerTwo.hand=='scissors'&&playerOne.hand=='paper')) {
        console.log('The winner is ' + playerTwo.name);
        playerTwoWins = playerTwoWins + 1;
    }
    else {
        console.log("It's a draw")
    }
    console.log("The score is " + playerOneWins + " to " + playerTwoWins);
}

function playGame1(playerOne,playerFour,playUntil) {
    console.log("GAME NUMBER 1")
    while (playerOneWins<(playUntil)&&playerTwoWins<(playUntil)) {
        playRound(playerOne,playerFour);
        playerOne.hand = getHand();
        playerFour.hand = getHand();
    }
    if (playerOneWins==playUntil) {
        return playerOne
    }
    if (playerTwoWins==playUntil) {
        return playerFour
    }
}


function playGame2(playerTwo,playerThree,playUntil) {
    console.log("GAME NUMBER 2")
    playerOneWins = 0;
    playerTwoWins = 0;
    while (playerOneWins<playUntil && playerTwoWins<playUntil) {
        playRound(playerTwo,playerThree);
        playerTwo.hand = getHand();
        playerThree.hand = getHand();
    }
    if (playerOneWins==playUntil) {
        return playerTwo
    }
    if (playerTwoWins==playUntil) {
        return playerThree
    }
}

function playFinal(playerOne,playerTwo,playUntil) {
    playerOneWins = 0;
    playerTwoWins = 0;
    console.log("FINAL")
    while (playerOneWins<playUntil && playerTwoWins<playUntil) {
        playRound(playerOne,playerTwo);
        playerOne.hand = getHand();
        playerTwo.hand = getHand();
    }
    if (playerOneWins==(playUntil)) {
        return playerOne
    }
    if (playerTwoWins==(playUntil)) {
        return playerTwo
    }
}

function playTourney(playerOne,playerTwo,playerThree,playerFour,playUntil) {
    var GameFinal = playFinal(playGame1(playerOne,playerFour,playUntil),playGame2(playerTwo,playerThree,playUntil),playUntil);
    console.log("The tourney winner is " + GameFinal.name);
    return GameFinal;
}

console.log(playTourney(player1,player2,player3,player4,5))