import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  REST_API: string='http://localhost:3080/meteo';
  constructor(private HttpClient:HttpClient) { }
  GetMeteo(){
    console.log(this.HttpClient.get(`${this.REST_API}`));
    return this.HttpClient.get(`${this.REST_API}`);
  }
}