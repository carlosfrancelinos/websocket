//index.js
const app = require('./app');
const appWs = require('./app-ws');
const serveenv = require('./server.env');

const server = app.listen(serveenv.PORT || 3000, () => {
    console.log(`App Express is runnig!`);
});

const wss = appWs(server);

setInterval(() => {
    wss.broadcast({ n: Math.random() });
}, 1000);