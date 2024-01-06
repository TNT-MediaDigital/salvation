module.exports = {
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || 'Deathnote01?',
    DB: process.env.DB_NAME || 'salvation',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000
    }
};