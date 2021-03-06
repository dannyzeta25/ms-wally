const mongoose = require('mongoose');
const config = require('./config');

const db = mongoose.connection;

class DataSource {
  static loadConnection() {
    const URL_CONECTION = config.loadConfigFromProject().mongoose.wally.uri;
    mongoose.connect(URL_CONECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // commented out currently
    });

    db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
    db.once('open', () => {
      console.log('connected'); // si esta todo ok, imprime esto
    });
  }
}

module.exports = DataSource;
