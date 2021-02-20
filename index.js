const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    '<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp8266</b></p></li><li><p><b>GET /data/esp32</b></p></li><li><p><b>GET /data/mkr1000</b></p></li><li><p><b>POST /data/esp8266</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/esp32</b>  => {suhu, lembab, analog}</p></li><li><p><b>POST /data/mkr1000</b>  => {suhu, lembab, analog}</p></li></ul>')
})


app.get('/data/esp32', (req, res) => {
  const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
	db.collection('rover').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        // console.log(doc.data().name + doc.data().age);
        // console.log(doc.data());
        wholeData.push(doc.data())
      });
      console.log(wholeData)
      res.send(wholeData)
    })
    .catch(error => {
      console.log('Error!', error);
  })
})

app.post('/data/esp32', (req, res)=>{
  const db = fire.firestore();
  var d= new Date();
  const datee=(d.getDate());
  const monthh=(d.getMonth()+1)
  const yearr=(d.getFullYear())


	db.settings({
      timestampsInSnapshots: true
    });
    db.collection('rover').add({
      temperature: req.body.temp,
      ph_value: req.body.ph_val,
      turbidity: req.body.turbi,
      // Date: new Date()
      Date : datee,
      Month:monthh,
      Year:yearr

    });
    res.send({
      temperature: req.body.temp,
      ph_value: req.body.ph_val,
      turbidity: req.body.turbi,
      Date: new Date().get, 
      Month:new Date().Month.get,
      Year:new Date().Year.get,
      status: 'POST data success!'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
