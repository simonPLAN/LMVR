
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})



export class MeteoComponent implements OnInit {
  Meteo:any=[];
  
  constructor(private apiService:ApiService) {}
  ngOnInit(): void {
    //récupération des donné du backend
    this.apiService.GetMeteo().subscribe(res=>{
      //affichage des informations dans la console
      console.log(res)
      this.Meteo=res;
    });
  }




}
