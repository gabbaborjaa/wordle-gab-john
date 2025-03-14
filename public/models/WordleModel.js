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
        this.attemptsRemaining -= 1
    }

    isGameOver() {
        let guess = '';
        for (const val of this.currentGuess) {
            guess += val;
        }
        return guess === this.answer || this.attemptsRemaining === 0;
    }

    validateGuess() {
        if (this.currentGuess.length != this.answer.length) {
            return false
        }
        return true
    }
    getFeedback() {
        const feedback = []
        const answerArray = this.answer.split('')
        const guessArray = [...this.currentGuess]

        guessArray.forEach((letter, index) => {
            if (letter === answerArray[index]) {
                feedback.push('correct')
                answerArray[index] = null
            } else if (answerArray.includes(letter)) {
                feedback.push('almost')
                answerArray[answerArray.indexOf(letter)] = null
            } else {
                feedback.push("incorrect")
            }
        })

        return feedback
    }

    resetCurrentGuess() {
        this.currentGuess = []
        this.nextLetter = 0
        this.attemptsRemaining -= 1;
    }
}