const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ success: false, message: 'Access token not found' });
    }
    
    const headerParts = authHeader.split(' ');
    if (headerParts.length !== 2) {
        return res.status(400).json({ success: false, message: 'Invalid Authorization header' });
    }

    const token = headerParts[1];
    
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: 'Invalid token' });
    }
}
module.exports = verifyToken;
