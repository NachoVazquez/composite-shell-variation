import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('@composite-shell-variation/booking/shell-mobile').then(
        m => m.BookingShellMobileModule
      )
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@composite-shell-variation/check-in/shell-mobile').then(
        m => m.CheckInShellMobileModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
