const express = require('express'),
app = express(),
port = process.env.PORT || 3050,
cors = require('cors'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
bearerToken = require('express-bearer-token');
require('dotenv').config();
const path = require('path');

// let corsOption = { origin: "http://localhost:3000" };
app.use(cors());

app.use(express.static(path.join(__dirname, '../front/build')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../front/build', 'index.html'));
//     console.log('port 3000 en écoute')
//   });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(bearerToken());

mongoose.connect('mongodb+srv://admin:FNRuSfE7TtkeScD@mjd.g140m.mongodb.net/MJD?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
const accountRoutes = require("./Routes/account");
const searchRoutes = require("./Routes/search");
const dashboardRoutes = require("./Routes/dashboard");


app.use('/account', accountRoutes);
app.use('/search', searchRoutes);
app.use('/dashboard', dashboardRoutes)

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
