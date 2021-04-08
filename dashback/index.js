
const express =require('express');
const cors= require('cors');
const { response } = require('express');

const app=express(),
      port=3080;

app.use(cors());



app.get('/meteo',(req,res)=>{
    //res.sendFile('https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr')
     
   
      res.json(
        [{
           "ville":"meteo.name",
           "temperature":"meteo.main.temp",
           "icon" : "http://openweathermap.org/img/wn/"+"data.weather[0].icon"+"@2x.png",
           "description":"meteo.weather[0].description"},
  ] )
  
     
  })

app.listen(port,()=>{
    console.log('Server is running on port 3080');
});