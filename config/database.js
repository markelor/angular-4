var crypto = require('crypto').randomBytes(256).toString('hex');
module.exports={
    uri: 'mongodb://localhost:27017/Arqueologia',
    secret: crypto,
    db: 'Arqueologia'
};
