import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllData(country1:string)
  {
    let baseUrl='https://api.exchangerate.host/latest?base='+country1
    return this.http.get(baseUrl)
  }
}
