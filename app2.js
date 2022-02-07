const express = require('express')
const app = express()
const port = 3000

const key = "JWT Token"
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/v1/hello', (req, res) => {
  res.send('Hey there')
  })

app.post('/v1/auth', (req, res) => {
  // res.send('Auth Success')
  username = req.body.username
  password = req.body.password
  if (username == "jagadeep" && password == "password"){
    token = {
      "jwt" : key,
      //"expires": expiry 
   }
   res.json(token)

}
  })
app.get('/v1/weather', get_weather)
function get_weather(req,response)
{
response.json(
    {
        "coord": {
      "lon": -123.262,
      "lat": 44.5646
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 990.04,
      "feels_like": 280.04,
      "temp_min": 278.79,
      "temp_max": 284.95,
      "pressure": 1020,
      "humidity": 81,
      "sea_level": 1020,
      "grnd_level": 1011
    },
    "visibility": 10000,
    "wind": {
      "speed": 1.28,
      "deg": 17,
      "gust": 1.3
    },
    "clouds": {
      "all": 50
    },
    "dt": 1642376495,
    "sys": {
      "type": 2,
      "id": 2006021,
      "country": "US",
      "sunrise": 1642347934,
      "sunset": 1642381185
    },
    "timezone": -28800,
    "id": 5720727,
    "name": "Corvallis",
    "cod": 200
      }
)
}
app.listen(port, () => {
console.log(`Server Started`)
})
