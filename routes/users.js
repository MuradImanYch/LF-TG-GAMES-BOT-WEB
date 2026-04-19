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
 * 
 * /api/users/{username}:
 *   get:
 *     summary: Получить пользователя по его имени пользователя (поиск по совпадениям)
 *     tags:
 *       - Users
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         description: Имя пользователя
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Успешный ответ

 */

router.get('/', controller.get);
router.get('/:username', controller.getByUsername);

module.exports = router;
