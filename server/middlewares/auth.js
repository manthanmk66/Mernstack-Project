const jwt = require('jsonwebtoken');
require("dotenv").config();

function verifytoken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ message: "Access Denied, Token Missing" });
    }

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = data; 
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid Token" });
    }
}

module.exports = verifytoken;
