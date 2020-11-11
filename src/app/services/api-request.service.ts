import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
	url = 'https://superheroapi.com/api.php/3436516309762932/';

  constructor(private http : HttpClient) { }

  searchByName(name){
  	return this.http.get(`${this.url}/search/${name}`)
  }
  searchByID(id){
  	return this.http.get(`${this.url}/${id}`)
  }
}
