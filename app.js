const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.post('/api/form', (req, res) => {
  nodemailer
})
app,get('/', (req, res) => {

});
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=> console.log('server started on' + PORT);
