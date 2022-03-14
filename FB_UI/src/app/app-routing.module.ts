import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Add required imports
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: 'book', component: BookFlightComponent },
  { path: 'view', component: ViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
