import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

declare const deroulementFilm: any;


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  // stockage des informations en dynamique
  film2=[{
    affiche:"",
    titre:"",
    dateDeSortie:"",
    description:""
  }
  ]
  
    totalAngularPackages: any;
    constructor(private http: HttpClient) {}
    
    ngOnInit() {
      this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=5bf1753ef6fc941997c9f4c033fcaf20&language=fr-FR&page=1').subscribe(data => {
        this.totalAngularPackages = data.total;
        console.log(data);

      this.film2 = [{
        affiche: data.results[0].poster_path,
        titre: data.results[0].title,
        dateDeSortie: data.results[0].release_date,
        description: data.results[0].overview
      }, {
        affiche: data.results[1].poster_path,
        titre: data.results[1].title,
        dateDeSortie: data.results[1].release_date,
        description: data.results[1].overview
      }, {
        affiche: data.results[2].poster_path,
        titre: data.results[2].title,
        dateDeSortie: data.results[2].release_date,
        description: data.results[2].overview
      }, {
        affiche: data.results[3].poster_path,
        titre: data.results[3].title,
        dateDeSortie: data.results[3].release_date,
        description: data.results[3].overview
      }, {
        affiche: data.results[4].poster_path,
        titre: data.results[4].title,
        dateDeSortie: data.results[4].release_date,
        description: data.results[4].overview
      }, {
        affiche: data.results[5].poster_path,
        titre: data.results[5].title,
        dateDeSortie: data.results[5].release_date,
        description: data.results[5].overview
      }, {
        affiche: data.results[7].poster_path,
        titre: data.results[7].title,
        dateDeSortie: data.results[7].release_date,
        description: data.results[7].overview
      }, {
        affiche: data.results[8].poster_path,
        titre: data.results[8].title,
        dateDeSortie: data.results[8].release_date,
        description: data.results[8].overview
      }, {
        affiche: data.results[9].poster_path,
        titre: data.results[9].title,
        dateDeSortie: data.results[9].release_date,
        description: data.results[9].overview
      }, {
        affiche: data.results[10].poster_path,
        titre: data.results[10].title,
        dateDeSortie: data.results[10].release_date,
        description: data.results[10].overview
      }
      ]
      })
    }
}
 