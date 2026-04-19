const express = require('express');
const router = express.Router();
const controller = require('../controllers/quiz.js');

/**
 * @openapi
 * /api/quiz/football-quiz-add:
 *   post:
 *     summary: Добавить вопрос - Футбольная викторина
 *     tags:
 *       - Футбольная викторина
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос добавлен
 * 
 * /api/quiz/football-quiz:
 *   get:
 *     summary: Получить список вопросов - Футбольная викторина
 *     tags:
 *       - Футбольная викторина
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/football-quiz-edit/{id}:
 *   put:
 *     summary: Редактировать вопрос - Футбольная викторина
 *     tags:
 *       - Футбольная викторина
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно обновлён
 * 
 * /api/quiz/football-quiz-delete/{id}:
 *   delete:
 *     summary: Удалить вопрос - Футбольная викторина
 *     tags:
 *       - Футбольная викторина
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
 * 
 * /api/quiz/football-quiz-wc-add:
 *   post:
 *     summary: Добавить вопрос - Футбольная викторина Чемпионат мира
 *     tags:
 *       - Футбольная викторина - Чемпионат мира
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос добавлен
 * 
 * /api/quiz/football-quiz-wc:
 *   get:
 *     summary: Получить список вопросов - Футбольная викторина - Чемпионат мира
 *     tags:
 *       - Футбольная викторина - Чемпионат мира
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/football-quiz-wc-edit/{id}:
 *   put:
 *     summary: Редактировать вопрос - Футбольная викторина - Чемпионат мира
 *     tags:
 *       - Футбольная викторина - Чемпионат мира
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно обновлён
 * 
 * /api/quiz/football-quiz-wc-delete/{id}:
 *   delete:
 *     summary: Удалить вопрос - Футбольная викторина - Чемпионат мира
 *     tags:
 *       - Футбольная викторина - Чемпионат мира
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
 * 
 * /api/quiz/guess-club-add:
 *   post:
 *     summary: Добавить вопрос - Угадай клуб игрока
 *     tags:
 *       - Угадай клуб игрока
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос добавлен
 * 
 * /api/quiz/guess-club:
 *   get:
 *     summary: Получить список вопросов - Угадай клуб игрока
 *     tags:
 *       - Угадай клуб игрока
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/guess-club-edit/{id}:
 *   put:
 *     summary: Редактировать вопрос - Угадай клуб игрока
 *     tags:
 *       - Угадай клуб игрока
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно обновлён
 * 
 * /api/quiz/guess-club-delete/{id}:
 *   delete:
 *     summary: Удалить вопрос - Угадай клуб игрока
 *     tags:
 *       - Угадай клуб игрока
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
 * 
 * /api/quiz/guess-national-team-add:
 *   post:
 *     summary: Добавить вопрос - Угадай сборную игрока
 *     tags:
 *       - Угадай сборную игрока
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос добавлен
 * 
 * /api/quiz/guess-national-team:
 *   get:
 *     summary: Получить список вопросов - Угадай сборную игрока
 *     tags:
 *       - Угадай сборную игрока
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/guess-national-team-edit/{id}:
 *   put:
 *     summary: Редактировать вопрос - Угадай сборную игрока
 *     tags:
 *       - Угадай сборную игрока
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно обновлён
 * 
 * /api/quiz/guess-national-team-delete/{id}:
 *   delete:
 *     summary: Удалить вопрос - Угадай сборную игрока
 *     tags:
 *       - Угадай сборную игрока
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
 * 
 * /api/quiz/guess-stadium-add:
 *   post:
 *     summary: Добавить вопрос - Угадай стадион клуба
 *     tags:
 *       - Угадай стадион клуба
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос добавлен
 * 
 * /api/quiz/guess-stadium:
 *   get:
 *     summary: Получить список вопросов - Угадай стадион клуба
 *     tags:
 *       - Угадай стадион клуба
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/guess-stadium-edit/{id}:
 *   put:
 *     summary: Редактировать вопрос - Угадай стадион клуба
 *     tags:
 *       - Угадай стадион клуба
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer1
 *               - answer2
 *               - answer3
 *               - answer4
 *               - correctIndex
 *               - explanation
 *               - difficulty
 *             properties:
 *               question:
 *                 type: string
 *                 example: ""
 *               answer1:
 *                 type: string
 *                 example: ""
 *               answer2:
 *                 type: string
 *                 example: ""
 *               answer3:
 *                 type: string
 *                 example: ""
 *               answer4:
 *                 type: string
 *                 example: ""
 *               correctIndex:
 *                 type: integer
 *                 example: ""
 *               explanation:
 *                 type: string
 *                 example: ""
 *               difficulty:
 *                 type: string
 *                 example: ""
 *               imgUrl:
 *                 type: string
 *                 example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно обновлён
 * 
 * /api/quiz/guess-stadium-delete/{id}:
 *   delete:
 *     summary: Удалить вопрос - Угадай стадион клуба
 *     tags:
 *       - Угадай стадион клуба
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID вопроса
 *         example: ""
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
 *
 */

router.post('/football-quiz-add', controller.addFootballQuiz);
router.get('/football-quiz', controller.getFootballQuiz);
router.put('/football-quiz-edit/:id', controller.editFootballQuiz);
router.delete('/football-quiz-delete/:id', controller.deleteFootballQuiz);

router.post('/football-quiz-wc-add', controller.addFootballQuizWC);
router.get('/football-quiz-wc', controller.getFootballQuizWC);
router.put('/football-quiz-wc-edit/:id', controller.editFootballQuizWC);
router.delete('/football-quiz-wc-delete/:id', controller.deleteFootballQuizWC);

router.post('/guess-club-add', controller.addGuessClub);
router.get('/guess-club', controller.getGuessClub);
router.put('/guess-club-edit/:id', controller.editGuessClub);
router.delete('/guess-club-delete/:id', controller.deleteGuessClub);

router.post('/guess-national-team-add', controller.addGuessNationalTeam);
router.get('/guess-national-team', controller.getGuessNationalTeam);
router.put('/guess-national-team-edit/:id', controller.editGuessNationalTeam);
router.delete('/guess-national-team-delete/:id', controller.deleteGuessNationalTeam);

router.get('/guess-stadium-add', controller.addGuessStadium);
router.get('/guess-stadium', controller.getGuessStadium);
router.put('/guess-stadium-edit/:id', controller.editGuessStadium);
router.delete('/guess-stadium-delete/:id', controller.deleteGuessStadium);

module.exports = router;
