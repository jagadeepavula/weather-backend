const express = require('express')
const app = express()
const port = 3000
app.get('/v1/hello', (req, res) => {
  res.send('Hey there')
  })
app.post('/v1/auth', (req, res) => {
  res.send('Auth Success')
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
        "icon": "02d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 300.04,
      "feels_like": 281.04,
      "temp_min": 268.79,
      "temp_max": 284.95,
      "pressure": 1020,
      "humidity": 82,
      "sea_level": 1020,
      "grnd_level": 1021
    },
    "visibility": 10001,
    "wind": {
      "speed": 1.28,
      "deg": 16,
      "gust": 1.2
    },
    "clouds": {
      "all": 51
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
console.log(`server successfully started`)
})