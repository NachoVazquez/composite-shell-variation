import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'check-in',
    loadChildren: () =>
      import('@composite-shell-variation/check-in/feature-check-in').then(
        m => m.CheckInFeatureCheckInModule
      )
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CheckInShellMobileModule {}
