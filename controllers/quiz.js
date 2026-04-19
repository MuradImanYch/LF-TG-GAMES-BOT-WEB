const db = require("../utils/db");

// Футбольная викторина
module.exports.addFootballQuiz = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const result = await db.execute(
            "INSERT INTO TBL_Q_FOOTBALL_QUIZ (QUESTION_TEXT, ANSWER_1, ANSWER_2, ANSWER_3, ANSWER_4, CORRECT_INDEX, EXPLANATION, DIFFICULTY, IS_ACTIVE, IMG_URL) VALUES (:question, :answer1, :answer2, :answer3, :answer4, :correctIndex, :explanation, :difficulty, :isActive, :imgUrl)",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, isActive: 1, imgUrl }
        );
        res.json({ message: "Вопрос добавлен", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.editFootballQuiz = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const { id } = req.params;
        const result = await db.execute(
            "UPDATE TBL_Q_FOOTBALL_QUIZ SET QUESTION_TEXT = :question, ANSWER_1 = :answer1, ANSWER_2 = :answer2, ANSWER_3 = :answer3, ANSWER_4 = :answer4, CORRECT_INDEX = :correctIndex, EXPLANATION = :explanation, DIFFICULTY = :difficulty, IMG_URL = :imgUrl WHERE ID = :id",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl, id }
        );
        res.json({ message: "Вопрос обновлён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.deleteFootballQuiz = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.execute(
            "DELETE FROM TBL_Q_FOOTBALL_QUIZ WHERE ID = :id",
            { id }
        );
        res.json({ message: "Вопрос успешно удалён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.getFootballQuiz = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_Q_FOOTBALL_QUIZ");
        res.json({ message: "Успешный запрос", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

// Футбольная викторина - Чемпионат мира
module.exports.addFootballQuizWC = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const result = await db.execute(
            "INSERT INTO TBL_Q_FOOTBALL_QUIZ_WC (QUESTION_TEXT, ANSWER_1, ANSWER_2, ANSWER_3, ANSWER_4, CORRECT_INDEX, EXPLANATION, DIFFICULTY, IS_ACTIVE, IMG_URL) VALUES (:question, :answer1, :answer2, :answer3, :answer4, :correctIndex, :explanation, :difficulty, :isActive, :imgUrl)",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, isActive: 1, imgUrl }
        );
        res.json({ message: "Вопрос добавлен", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.editFootballQuizWC = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const { id } = req.params;
        const result = await db.execute(
            "UPDATE TBL_Q_FOOTBALL_QUIZ_WC SET QUESTION_TEXT = :question, ANSWER_1 = :answer1, ANSWER_2 = :answer2, ANSWER_3 = :answer3, ANSWER_4 = :answer4, CORRECT_INDEX = :correctIndex, EXPLANATION = :explanation, DIFFICULTY = :difficulty, IMG_URL = :imgUrl WHERE ID = :id",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl, id }
        );
        res.json({ message: "Вопрос обновлён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.deleteFootballQuizWC = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.execute(
            "DELETE FROM TBL_Q_FOOTBALL_QUIZ_WC WHERE ID = :id",
            { id }
        );
        res.json({ message: "Вопрос успешно удалён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.getFootballQuizWC = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_Q_FOOTBALL_QUIZ_WC");
        res.json({ message: "Успешный запрос", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

// Угадай клуб игрока
module.exports.addGuessClub = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const result = await db.execute(
            "INSERT INTO TBL_Q_GUESS_CLUB (QUESTION_TEXT, ANSWER_1, ANSWER_2, ANSWER_3, ANSWER_4, CORRECT_INDEX, EXPLANATION, DIFFICULTY, IS_ACTIVE, IMG_URL) VALUES (:question, :answer1, :answer2, :answer3, :answer4, :correctIndex, :explanation, :difficulty, :isActive, :imgUrl)",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, isActive: 1, imgUrl }
        );
        res.json({ message: "Вопрос добавлен", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.editGuessClub = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const { id } = req.params;
        const result = await db.execute(
            "UPDATE TBL_Q_GUESS_CLUB SET QUESTION_TEXT = :question, ANSWER_1 = :answer1, ANSWER_2 = :answer2, ANSWER_3 = :answer3, ANSWER_4 = :answer4, CORRECT_INDEX = :correctIndex, EXPLANATION = :explanation, DIFFICULTY = :difficulty, IMG_URL = :imgUrl WHERE ID = :id",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl, id }
        );
        res.json({ message: "Вопрос обновлён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.deleteGuessClub = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.execute(
            "DELETE FROM TBL_Q_GUESS_CLUB WHERE ID = :id",
            { id }
        );
        res.json({ message: "Вопрос успешно удалён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.getGuessClub = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_Q_GUESS_CLUB");
        res.json({ message: "Успешный запрос", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

// Угадай сборную игрока
module.exports.addGuessNationalTeam = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const result = await db.execute(
            "INSERT INTO TBL_Q_GUESS_NATIONAL_TEAM (QUESTION_TEXT, ANSWER_1, ANSWER_2, ANSWER_3, ANSWER_4, CORRECT_INDEX, EXPLANATION, DIFFICULTY, IS_ACTIVE, IMG_URL) VALUES (:question, :answer1, :answer2, :answer3, :answer4, :correctIndex, :explanation, :difficulty, :isActive, :imgUrl)",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, isActive: 1, imgUrl }
        );
        res.json({ message: "Вопрос добавлен", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.getGuessNationalTeam = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_Q_GUESS_NATIONAL_TEAM");
        res.json({ message: "Успешный запрос", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.editGuessNationalTeam = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const { id } = req.params;
        const result = await db.execute(
            "UPDATE TBL_Q_GUESS_NATIONAL_TEAM SET QUESTION_TEXT = :question, ANSWER_1 = :answer1, ANSWER_2 = :answer2, ANSWER_3 = :answer3, ANSWER_4 = :answer4, CORRECT_INDEX = :correctIndex, EXPLANATION = :explanation, DIFFICULTY = :difficulty, IMG_URL = :imgUrl WHERE ID = :id",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl, id }
        );
        res.json({ message: "Вопрос обновлён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.deleteGuessNationalTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.execute(
            "DELETE FROM TBL_Q_GUESS_NATIONAL_TEAM WHERE ID = :id",
            { id }
        );
        res.json({ message: "Вопрос успешно удалён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

// Угадай стадион клуба
module.exports.addGuessStadium = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const result = await db.execute(
            "INSERT INTO TBL_Q_GUESS_STADIUM_BY_CLUB (QUESTION_TEXT, ANSWER_1, ANSWER_2, ANSWER_3, ANSWER_4, CORRECT_INDEX, EXPLANATION, DIFFICULTY, IS_ACTIVE, IMG_URL) VALUES (:question, :answer1, :answer2, :answer3, :answer4, :correctIndex, :explanation, :difficulty, :isActive, :imgUrl)",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, isActive: 1, imgUrl }
        );
        res.json({ message: "Вопрос добавлен", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.getGuessStadium = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_Q_GUESS_STADIUM_BY_CLUB");
        res.json({ message: "Успешный запрос", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.editGuessStadium = async (req, res) => {
    try {
        const { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl } = req.body;
        const { id } = req.params;
        const result = await db.execute(
            "UPDATE TBL_Q_GUESS_STADIUM_BY_CLUB SET QUESTION_TEXT = :question, ANSWER_1 = :answer1, ANSWER_2 = :answer2, ANSWER_3 = :answer3, ANSWER_4 = :answer4, CORRECT_INDEX = :correctIndex, EXPLANATION = :explanation, DIFFICULTY = :difficulty, IMG_URL = :imgUrl WHERE ID = :id",
            { question, answer1, answer2, answer3, answer4, correctIndex, explanation, difficulty, imgUrl, id }
        );
        res.json({ message: "Вопрос обновлён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}

module.exports.deleteGuessStadium = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.execute(
            "DELETE FROM TBL_Q_GUESS_STADIUM_BY_CLUB WHERE ID = :id",
            { id }
        );
        res.json({ message: "Вопрос успешно удалён", data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Ошибка сервера" });
    }
}