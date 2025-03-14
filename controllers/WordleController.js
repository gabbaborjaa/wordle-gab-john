export default class WordleController {

    constructor(model) {
        this.model = model;
    }

    initBoard() {
        let board = document.querySelector("#wordle-grid");
        for (let i = 0; i < this.model.maxAttempts; i++) {
            let row = document.createElement("div")
            row.className = "row"
    
            for (let j = 0; j < this.model.answer.length; j++) {
                let box = document.createElement("div")
                box.className = "cell"
                row.appendChild(box)
            }
    
            board.appendChild(row)
        }
    }

    handleKeyPress() {
        document.addEventListener("keyup", (e) => {

            if (this.model.attemptsRemaining === 0) {
                return
            }
        
            let pressedKey = String(e.key)
            if (pressedKey === "Backspace" && this.model.nextLetter !== 0) {
                this.deleteLetter()
                return
            }
        
            if (pressedKey === "Enter") {
                this.checkGuess()
                return
            }
        
            let found = pressedKey.match(/[a-z]/gi)
            if (!found || found.length > 1) {
                return
            } else {
                this.insertLetter(pressedKey)
            }
        })
    }

    insertLetter(pressedKey) {
        if (this.model.nextLetter === this.model.answer.length) {
            return
        }
        pressedKey = pressedKey.toUpperCase()

        let row = document.getElementsByClassName("row")[this.model.maxAttempts - this.model.attemptsRemaining]
        let box = row.children[this.model.nextLetter]
        box.textContent = pressedKey
        this.model.currentGuess.push(pressedKey)
        this.model.nextLetter += 1
    }

    deleteLetter(pressedKey) {
        let row = document.getElementsByClassName("row")[this.model.maxAttempts - this.model.attemptsRemaining]
        let box = row.children[this.model.nextLetter - 1]
        box.textContent = ""
        this.model.currentGuess.pop()
        this.model.nextLetter -= 1
    }
}