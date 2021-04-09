
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})


export class MeteoComponent implements OnInit {
  
  // stockage des informations 
  meteo = {
    ville: '',
    description: '',
    temperature: '',
    icon:''
   };

  constructor(private http: HttpClient) {}

 
  

  ngOnInit() {
    // appel de l'API avec le lien fourni par le site et la clé necésaire
    this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=Le Mans&appid=40170a02e70a9dafdceed1c03133ef7b&units=metric&lang=fr')
      .subscribe(data => {
      //affichage des données dans la console
      console.log(data);
      //récupération des données depuis la variable data
      this.meteo.ville = data.name;
      this.meteo.description = data.weather[0].description;
      this.meteo.temperature = data.main.temp;
      this.meteo.icon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";


  })
  }




}



/*
export class MeteoComponent implements OnInit {
  Meteo:any=[];

  constructor(private apiService:ApiService) {}
  ngOnInit(): void {
    this.apiService.GetMeteo().subscribe(res=>{
      console.log(res)
      this.Meteo=res;
    });
  }




}


*/


