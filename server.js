const express = require('express');
app = express();
port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const accountRoutes = require('./Routes/account')

mongoose.connect('mongodb+srv://admin:FNRuSfE7TtkeScD@mjd.g140m.mongodb.net/MJD?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// app.route('/').get(function(req, res) {
//     res.send('hello world');
// });

app.use('/api/account', accountRoutes);

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
