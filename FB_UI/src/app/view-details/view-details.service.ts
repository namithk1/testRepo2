import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightBooking } from '../shared/FlightBooking';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ViewDetailsService {


  constructor(private http: HttpClient) {

  }

  view(): Observable<FlightBooking[]> {
    //Consume the exposed URI's specified in QP
    let reterner: Observable<FlightBooking[]>;
    return this.http.get('http://localhost:1020/getallId').pipe(map((response) => {
      let saved = JSON.stringify(response);
      let newSaved = JSON.parse(saved);
      return reterner = newSaved.map((ele: any) => {
        return {
          bookingId: ele.bookingId,
          passengerName: ele.passengerName,
          noOfTickets: ele.noOfTickets,
          totalAmount: ele.totalAmount,
          flightId: ele.flightId,
        }
      })
    }))

  }

  delete(id:any) : Observable<any> {
    //Consume the exposed URI's specified in QP
    return this.http.delete(`http://localhost:1020/delete/${id}`);
  }

}
