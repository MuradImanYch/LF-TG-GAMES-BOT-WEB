const db = require("../utils/db");

module.exports.get = async (req, res) => {
    try {
        const result = await db.execute("SELECT * FROM TBL_USERS");
        res.json({ data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports.getByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const result = await db.execute(`SELECT * FROM TBL_USERS WHERE LOWER(USERNAME) LIKE LOWER(:username)`,{ username: `%${username}%` });
        res.json({ data: result.rows });
    }
    catch (err) {        
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}