import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_SCOPE,
  TranslocoModule,
  translocoConfig,
  AvailableLangs
} from '@ngneat/transloco';

import { translocoLoader } from './transloco.loader';

export type AvailableLang = string | { id: string; label: string } | undefined;

/**
 * Configures the Transloco Module for Apps.
 *
 * Use forRoot configuration only in app.module of apps.
 *
 * Use forChild configuration only in main module of libs.
 *
 * For a complete list of plugins check https://github.com/ngneat/transloco#plugins
 *
 * If translation loading speed needs to be improved check https://netbasal.com/optimize-user-experience-while-your-angular-app-loads-7e982a67ff1a
 *
 */
@NgModule({
  imports: [CommonModule, TranslocoModule],
  exports: [TranslocoModule]
})
export class TranslocoConfigModule {
  static forRoot(
    prodMode: boolean = false,
    availableLangs: AvailableLangs = [
      { id: 'en', label: 'English' },
      { id: 'es', label: 'Español' }
    ]
  ): ModuleWithProviders {
    return {
      ngModule: TranslocoConfigModule,
      providers: [
        {
          provide: TRANSLOCO_CONFIG,
          useValue: translocoConfig({
            availableLangs: availableLangs,
            defaultLang: 'en',
            prodMode: prodMode,
            reRenderOnLangChange: true, // set to true when dynamic language change is in place
            flatten: {
              aot: prodMode
            }
          })
        },
        translocoLoader
      ]
    };
  }
  static forChild(scopeName: string, loader: any): ModuleWithProviders {
    return {
      ngModule: TranslocoConfigModule,
      providers: [
        {
          provide: TRANSLOCO_SCOPE,
          useValue: {
            scope: scopeName,
            loader
          }
        }
      ]
    };
  }
}
