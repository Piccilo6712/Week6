
class Decks {
    constructor() {
        this.fullDeck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14];
        this.shuffledDeck = this.shuffle(this.fullDeck);
        this.playerDeck = this.shuffledDeck.slice(0, 26);
        this.opponentDeck = this.shuffledDeck.slice(26, 52);
        this.playerPoints = 0;
        this.opponentPoints = 0;
    }

    //Fisher-Yates shuffle method
    shuffle(array) {
        let indexPosition = array.length, randomIndex;
        while (indexPosition != 0) {
            randomIndex = Math.floor(Math.random() * indexPosition);
            indexPosition--;
            [array[indexPosition], array[randomIndex]] = [array[randomIndex], array[indexPosition]];
        }
        return array;
    }

}

//Menu Class for UI
class Menu extends Decks {
    newGame() {

        alert(`Beginning new game of war. Aces are high.`);
        alert('Shuffling deck and dealing cards to you and your opponent.');
        this.shuffle(this.shuffledDeck);
        alert('Cards dealt.');
        this.newTurn();
        return this.endGame();
    }

    newTurn() {
        for (let turn = 1; turn < 27; turn++) {
            alert(`Turn ${turn}. Play your card.`);
            let playerCard = this.playerDeck.shift();
            let opponentCard = this.opponentDeck.shift();
            alert(`The card you played had a value of ${playerCard}. Your opponent's card had a value of ${opponentCard}.`)

            if (playerCard > opponentCard) {
                this.playerPoints++;
                alert(`You won the round and gained a point!
                Your points: ${this.playerPoints}
                Your opponent's points: ${this.opponentPoints}`);
            } else if (playerCard < opponentCard) {
                this.opponentPoints++;
                alert(`Your opponent won the round and gained a point.
                Your points: ${this.playerPoints}
                Your opponent's points: ${this.opponentPoints}`);
            } else {
                alert(`Tie! No points awarded to either player.
                Your points: ${this.playerPoints}
                Your opponent's points: ${this.opponentPoints}`);
            }
        }
    }
    
    endGame() {
        alert(`You've both run out of cards. Let's see who won!
        You scored... ${this.playerPoints} point(s).
        Your opponent scored... ${this.opponentPoints} point(s).`);

        if (this.playerPoints > this.opponentPoints) {
            alert(`Congratulations! You won!`);
        } else if (this.playerPoints < this.opponentPoints) {
            alert('You lost...');
        } else {
            alert(`It was a tie!`);
        }
        //this.anotherGame();
    }

//This was causing problems looping forever. Not sure why.
    /*anotherGame() {
        let playAgain = prompt(`Play again?
        Y) Yes
        N) No`);

        if (playAgain = 'Y' || 'y') {
            this.playerPoints = 0;
            this.opponentPoints = 0;
            this.shuffledDeck = this.shuffle(this.fullDeck);
            this.playerDeck = this.shuffledDeck.slice(0,26);
            this.opponentDeck = this.shuffledDeck.slice(26, 52);
            
            this.newGame();
        } else if (playAgain = 'N' || 'n') {
            alert('Bye bye! Thanks for playing!');
        } else {
            alert('Unknown command');
            this.anotherGame();
        }
    } */
}

//Fisher-Yates Shuffle function
function shuffle(array) {
    let indexPosition = array.length, randomIndex;
    while (indexPosition != 0) {
        randomIndex = Math.floor(Math.random() * indexPosition);
        indexPosition--;
        [array[indexPosition], array[randomIndex]] = [array[randomIndex], array[indexPosition]];
    }
    return array;
}

let mainMenu = new Menu;
mainMenu.newGame();