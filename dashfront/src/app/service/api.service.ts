import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// on appelle la backend 
  REST_API: string='http://localhost:3000/location/Le%20Mans';
  constructor(private HttpClient:HttpClient) { }
  GetMeteo(){
    console.log(this.HttpClient.get(`${this.REST_API}`));
    return this.HttpClient.get(`${this.REST_API}`);
  }
}
