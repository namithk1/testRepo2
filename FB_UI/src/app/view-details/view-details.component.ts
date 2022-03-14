import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ViewDetailsService } from "./view-details.service";
import { FlightBooking } from '../shared/FlightBooking';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {

  flightDetails: Array<any>=[];


  constructor(public viewDetailsService: ViewDetailsService) {

  }

  ngOnInit() {
    this.view();

  }

  view() {
    this.viewDetailsService.view().subscribe((responce) => {
      console.log(responce);
      this.flightDetails = responce;
    })

  }

  delete(id: any) {
    this.viewDetailsService.delete(id).subscribe((res)=>{
      console.log(res)
      this.view();
    })
  }

}

