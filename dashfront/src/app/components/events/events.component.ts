import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

/* Créaton de la fonction changement d'événement */
declare const changerEvent: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  /* Variable de stockage sous forme de tableau des événements */
  events = {
    evenement1: [" ", " "," ", " ", " ", " "],
    evenement2: [" ", " "," ", " ", " ", " "],
    evenement3: [" ", " "," ", " ", " ", " "] 
  };
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

  /* Fonction qui s'active lors d'un click sur le bouton souhaité, ici le bouton "suivant" et "précédent" */
  onClick(sens: any){
    changerEvent(sens,this.events.evenement1,this.events.evenement2,this.events.evenement3);
  }

  ngOnInit() {
    /* Lien vers l'API */
    this.http.get<any>('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&facet=tags&facet=placename&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.placename=Le+Mans&refine.date_start=2021').subscribe(data => {
      this.totalAngularPackages = data.total;

      /* Affichage des données dans la console du site (inspecter l'élement) */
      console.log(data);
    
      this.events.evenement1[0] = data.records[0].fields.title;       /* Récupération du titre de l'événement */
      this.events.evenement1[1] = data.records[0].fields.date_start;  /* Récupération de la date de début de l'événement */
      this.events.evenement1[2] = data.records[0].fields.address;     /* Récupération de l'adresse de l'événement */
      this.events.evenement1[3] = data.records[0].fields.image;       /* Récupération de l'image de l'événement */
      this.events.evenement1[4] = data.records[0].fields.description; /* Récupération de la description de l'événement */
      this.events.evenement1[5] = data.records[0].fields.link;        /* Récupération du lien de l'événement */


      this.events.evenement2[0] = data.records[1].fields.title;       /* Récupération du titre de l'événement */
      this.events.evenement2[1] = data.records[1].fields.date_start;  /* Récupération de la date de début de l'événement */
      this.events.evenement2[2] = data.records[1].fields.address;     /* Récupération de l'adresse de l'événement */
      this.events.evenement2[3] = data.records[1].fields.image;       /* Récupération de l'image de l'événement */
      this.events.evenement2[4] = data.records[1].fields.description; /* Récupération de la description de l'événement */
      this.events.evenement2[5] = data.records[1].fields.link;        /* Récupération du lien de l'événement */


      this.events.evenement3[0] = data.records[2].fields.title;       /* Récupération du titre de l'événement */
      this.events.evenement3[1] = data.records[2].fields.date_start;  /* Récupération de la date de début de l'événement */
      this.events.evenement3[2] = data.records[2].fields.address;     /* Récupération de l'adresse de l'événement */
      this.events.evenement3[3] = data.records[2].fields.image;       /* Récupération de l'image de l'événement */
      this.events.evenement3[4] = data.records[2].fields.description; /* Récupération de la description de l'événement */
      this.events.evenement3[5] = data.records[2].fields.link;        /* Récupération du lien de l'événement */


    })
  }

}
