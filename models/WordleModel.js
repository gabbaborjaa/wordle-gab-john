export default class WordleModel {
    constructor(answer, maxAttempts) {
        this.answer = answer.toUpperCase();
        this.maxAttempts = maxAttempts;
        this.attemptsRemaining = maxAttempts;
        this.nextLetter = 0;
        this.currentGuess = [];
    }

    addGuess(word) {
        this.guesses.push(word.toUpperCase());
    }

    isGameOver() {
        return this.guesses.includes(this.answer) || this.guesses.length >= this.maxAttempts;
    }
}