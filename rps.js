var hands = ['rock','paper','scissors']

function getHand() {
    return hands[parseInt(Math.random()*10)%3]
}

var player1 = {
    name: 'Dude',
    hand: getHand(),
    wins: 0,
    losses: 0
}

var player2 = {
    name: 'What',
    hand: getHand(),
    wins:0,
    losses:0
}

var player3 = {
    name: 'Is',
    hand: getHand(),
    wins:0,
    losses:0
}

var player4 = {
    name:'Up',
    hand: getHand(),
    wins:0,
    losses:0
}

function playRound(playerOne, playerTwo) {
    playerOne.hand;
    playerTwo.hand;
    console.log(playerOne.name + ' has ' + playerOne.hand);
    console.log(playerTwo.name + ' has ' + playerTwo.hand);
    if ((playerOne.hand == 'rock' && playerTwo.hand == 'scissors')||(playerOne.hand=='paper' && playerTwo.hand=='rock')||(playerOne.hand=='scissors'&&playerTwo.hand=='paper')) {
        console.log('The winner is ' + playerOne.name);
        playerOne.wins = playerOne.wins + 1;
        playerTwo.losses = playerTwo.losses + 1;
    }
    else if ((playerTwo.hand == 'rock' && playerOne.hand == 'scissors')||(playerTwo.hand=='paper' && playerOne.hand=='rock')||(playerTwo.hand=='scissors'&&playerOne.hand=='paper')) {
        console.log('The winner is ' + playerTwo.name);
        playerTwo.wins = playerTwo.wins + 1;
        playerOne.losses = playerOne.losses + 1;
    }
    else {
        console.log("It's a draw")
    }
    console.log("The score is " + playerOne.wins + " to " + playerTwo.wins);
}

function playGame1(playerOne,playerFour,playUntil) {
    console.log("GAME NUMBER 1")
    while (playerOne.wins<(playUntil)&&playerFour.wins<(playUntil)) {
        playRound(playerOne,playerFour);
        playerOne.hand = getHand();
        playerFour.hand = getHand();
    }
    if (playerOne.wins==playUntil) {
        return playerOne
    }
    if (playerFour.wins==playUntil) {
        return playerFour
    }
}


function playGame2(playerTwo,playerThree,playUntil) {
    console.log("GAME NUMBER 2")
    while (playerTwo.wins<playUntil && playerThree.wins<playUntil) {
        playRound(playerTwo,playerThree);
        playerTwo.hand = getHand();
        playerThree.hand = getHand();
    }
    if (playerTwo.wins==playUntil) {
        return playerTwo
    }
    if (playerThree.wins==playUntil) {
        return playerThree
    }
}

function playFinal(playerOne,playerTwo,playUntil) {
    console.log("FINAL")
    playerOne.wins=0;
    playerTwo.wins =0;
    while (playerOne.wins<playUntil && playerTwo.wins<playUntil) {
        playRound(playerOne,playerTwo);
        playerOne.hand = getHand();
        playerTwo.hand = getHand();
    }
    if (playerOne.wins==(playUntil)) {
        return playerOne
    }
    if (playerTwo.wins==(playUntil)) {
        return playerTwo
    }
}

function playTourney(playerOne,playerTwo,playerThree,playerFour,playUntil) {
    var GameFinal = playFinal(playGame1(playerOne,playerFour,playUntil),playGame2(playerTwo,playerThree,playUntil),playUntil);
    console.log("The tourney winner is " + GameFinal.name);
    GameFinal.wins = playUntil * 2;
    return GameFinal;
}

console.log(playTourney(player1,player2,player3,player4,5))