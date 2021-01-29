const express = require('express');

const config = require('./config/config');

const app = express(); 

require ('./config/express')(app);

const routes = require('./routes');

app.use(routes);


// app.get('/', (req, res) => {
//     res.render('index', {layout: false});
// });

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`))