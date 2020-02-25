import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'passenger-info',
    loadChildren: () =>
      import(
        '@composite-shell-variation/booking/feature-mobile-seat-listing'
      ).then(m => m.BookingFeatureMobileSeatListingModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingShellMobileModule {}
