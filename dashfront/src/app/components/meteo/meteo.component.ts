
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
    // on apelle le backend pour récuperer les donner avec le service
    this.apiService.GetMeteo().subscribe(res=>{
      console.log(res) //affichage des information dans la console
      this.Meteo=res;
    });
  }




}
