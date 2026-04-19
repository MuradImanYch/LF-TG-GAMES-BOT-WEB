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
 *                 example: Кто выиграл Чемпионат Азербайджана в сезоне 2025/2026?
 *               answer1:
 *                 type: string
 *                 example: Нефтчи
 *               answer2:
 *                 type: string
 *                 example: Карабах
 *               answer3:
 *                 type: string
 *                 example: Сабах
 *               answer4:
 *                 type: string
 *                 example: Габала
 *               correctIndex:
 *                 type: integer
 *                 example: 3
 *               explanation:
 *                 type: string
 *                 example: Сабах выиграл чемпионат Азербайджана в сезоне 2025/2026, впервые в своей истории
 *               difficulty:
 *                 type: string
 *                 example: Сложно
 *               imgUrl:
 *                 type: string
 *                 example: https://c0.wallpaperflare.com/preview/334/475/739/canada-montreal-paper-pencil.jpg
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
 *         example: 1
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: Кто выиграл Чемпионат Азербайджана в сезоне 2025/2026?
 *               answer1:
 *                 type: string
 *                 example: Нефтчи
 *               answer2:
 *                 type: string
 *                 example: Карабах
 *               answer3:
 *                 type: string
 *                 example: Сабах
 *               answer4:
 *                 type: string
 *                 example: Габала
 *               correctIndex:
 *                 type: integer
 *                 example: 3
 *               explanation:
 *                 type: string
 *                 example: Сабах выиграл чемпионат Азербайджана в сезоне 2025/2026, впервые в своей истории
 *               difficulty:
 *                 type: string
 *                 example: Сложно
 *               imgUrl:
 *                 type: string
 *                 example: https://c0.wallpaperflare.com/preview/334/475/739/canada-montreal-paper-pencil.jpg
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
 *         example: 1
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
 *                 example: Кто выиграл ЧМ 2018?
 *               answer1:
 *                 type: string
 *                 example: Франция
 *               answer2:
 *                 type: string
 *                 example: Германия
 *               answer3:
 *                 type: string
 *                 example: Бразилия
 *               answer4:
 *                 type: string
 *                 example: Аргентина
 *               correctIndex:
 *                 type: integer
 *                 example: 1
 *               explanation:
 *                 type: string
 *                 example: Франция выиграла финал против Хорватии
 *               difficulty:
 *                 type: string
 *                 example: Легко
 *               imgUrl:
 *                 type: string
 *                 example: https://c0.wallpaperflare.com/preview/334/475/739/canada-montreal-paper-pencil.jpg
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
 *         example: 1
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: Кто выиграл ЧМ 2018?
 *               answer1:
 *                 type: string
 *                 example: Франция
 *               answer2:
 *                 type: string
 *                 example: Германия
 *               answer3:
 *                 type: string
 *                 example: Бразилия
 *               answer4:
 *                 type: string
 *                 example: Аргентина
 *               correctIndex:
 *                 type: integer
 *                 example: 1
 *               explanation:
 *                 type: string
 *                 example: Франция выиграла финал против Хорватии
 *               difficulty:
 *                 type: string
 *                 example: Легко
 *               imgUrl:
 *                 type: string
 *                 example: https://c0.wallpaperflare.com/preview/334/475/739/canada-montreal-paper-pencil.jpg
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
 *         example: 1
 *     responses:
 *       200:
 *         description: Вопрос успешно удалён
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
 * /api/quiz/guess-national-team:
 *   get:
 *     summary: Получить список вопросов - Угадай сборную игрока
 *     tags:
 *       - Угадай сборную игрока
 *     responses:
 *       200:
 *         description: Успешный запрос
 * 
 * /api/quiz/guess-stadium:
 *   get:
 *     summary: Получить список вопросов - Угадай стадион
 *     tags:
 *       - Угадай стадион
 *     responses:
 *       200:
 *         description: Успешный запрос
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


router.get('/guess-club', controller.getGuessClub);
router.get('/guess-national-team', controller.getGuessNationalTeam);
router.get('/guess-stadium', controller.getGuessStadium);

module.exports = router;
