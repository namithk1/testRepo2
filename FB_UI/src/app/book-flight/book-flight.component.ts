import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookFlightService } from "./book-flight.service";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: String = '';
  successMessage: String = '';

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  bookingForm = this.fb.group({
    passengerName: ['', Validators.required],
    noOfTickets: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.min(1)]],
    flightId: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(7), validateFlight]]
  })

  ngOnInit() {
    console.log(environment);
  }



  book() {
    let data = {
      passengerName: this.bookingForm.controls.passengerName.value,
      noOfTickets: this.bookingForm.controls.noOfTickets.value,
      flightId: this.bookingForm.controls.flightId.value
    }
    this.bookFlightService.getData(data).subscribe(response => {
      let saved = JSON.stringify(response);
      let newSaved = JSON.parse(saved)
      this.successMessage = newSaved.message;
      this.errorMessage='';
    }, (error => {
      this.errorMessage = error.error.message;
      this.successMessage ='';
    }));
  }
}

function validateFlight(c: FormControl) {
  let EMAIL_REGEXP = /[A-Z]{3,3}[-][0-9]{3,3}$/;
  return EMAIL_REGEXP.test(c.value) ? null : {
    emailInvalid: {
      message: "Invalid Format!"
    }
  };

}


