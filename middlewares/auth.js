const jwt = require("jsonwebtoken");
const jwt_secret = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, jwt_secret);
        const userID = decodedToken.userID;
        if (req.body.userID && req.body.userID !== userID) {
            throw "User ID invalide";
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error : error | "Requête non authentifée."})
    }
}