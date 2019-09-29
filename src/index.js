const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/autenticacaoEstudante')(app);
require('./controllers/autenticacaoCronograma')(app);

app.listen(3000);