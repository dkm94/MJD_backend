const express = require('express'),
app = express(),
port = process.env.PORT || 3000,

bodyParser = require('body-parser'),
mongoose = require('mongoose'),
bearerToken = require('express-bearer-token');
require('dotenv').config();

app.use(bearerToken());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://admin:FNRuSfE7TtkeScD@mjd.g140m.mongodb.net/MJD?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
const accountRoutes = require("./Routes/account");

// app.route('/').get(function(req, res) {
//     res.send('hello world');
// });


app.use('/account', accountRoutes);

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
