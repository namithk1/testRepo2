import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class BookFlightService {

 // errorMessage: String;

  constructor(private http: HttpClient) { }

  getData(data:any) {
   //Consume the exposed REST api from http://localhost:1020/bookFlight
   return this.http.post('http://localhost:1020/bookFlight',data)
  }

}
