import { Component } from '@angular/core';

import { Language, DefaultLocale, Currency } from 'angular-l10n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  @Language() lang: string;
  @DefaultLocale() defaultLocale: string;
  @Currency() currency: string;

}
