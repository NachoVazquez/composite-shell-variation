import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerInfoComponent } from './passenger-info.component';

const routes: Routes = [
  {
    path: '',
    component: PassengerInfoComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PassengerInfoComponent]
})
export class BookingFeaturePassengerInfoModule {}
