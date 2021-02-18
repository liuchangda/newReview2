const Koa = require('koa');
const logger = require('./logger');
const app = new Koa();

app.use(logger);

app.listen(3000);
console.log('[demo] start-quick is starting at port 3000');