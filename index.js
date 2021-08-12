//index.js
const app = require('./app');
const serveenv = require('./server.env');

const server = app.listen(serveenv.PORT || 3000, () => {
    console.log(`App Express is runnig!`);
})