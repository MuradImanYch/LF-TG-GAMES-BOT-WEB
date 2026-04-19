const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.js');

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Получить список пользователей
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Успешный ответ

 */

router.get('/', controller.get);

module.exports = router;
