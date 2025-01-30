const express = require('express');

const logger= require('./config/logger-config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
console.log('entering');

app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log(`Successfully started the server on PORT :3000 `);
    logger.info('succusfully logging ');
});
