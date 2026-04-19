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