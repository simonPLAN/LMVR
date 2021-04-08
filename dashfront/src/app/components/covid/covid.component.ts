import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class covidComponent implements OnInit {
    // stockage des informations 

  covid = {
    deces: '',
    gueris: '',
    nouv_reanimation: '',
    nouv_hospitalisation: ''

  };
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

 
  

  ngOnInit() {
        // appel de l'API avec le lien fourni par le site 
    this.http.get<any>('https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=Sarthe').subscribe(data => {
      this.totalAngularPackages = data.total;
      //affichage des données dans la console
      console.log(data);
      //récupération des données depuis la variable data
      this.covid.deces = data.LiveDataByDepartement[0].deces;
      this.covid.gueris = data.LiveDataByDepartement[0].gueris;
      this.covid.nouv_reanimation = data.LiveDataByDepartement[0].nouvellesReanimations;
      this.covid.nouv_hospitalisation = data.LiveDataByDepartement[0].nouvellesHospitalisations;
  })
  }




}