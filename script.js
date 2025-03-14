import WordleModel from "./models/WordleModel.js";
import WordleController from "./controllers/WordleController.js";

const wordleModel = new WordleModel("apple", 6);
const wordleController = new WordleController(wordleModel);

wordleController.initBoard();
wordleController.handleKeyPress();