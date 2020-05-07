import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFeatureSeatListingComponent } from './booking-feature-seat-listing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookingFeatureSeatListingComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BookingFeatureSeatListingComponent]
})
export class BookingFeatureSeatListingModule {}
