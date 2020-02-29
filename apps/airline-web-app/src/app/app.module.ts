import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TranslocoConfigModule } from '@composite-shell-variation/shared/utils-transloco-config';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('@composite-shell-variation/booking/shell-web').then(
        m => m.BookingShellWebModule
      )
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('@composite-shell-variation/check-in/shell-web').then(
        m => m.CheckInShellWebModule
      )
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslocoConfigModule.forRoot(environment.production)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
