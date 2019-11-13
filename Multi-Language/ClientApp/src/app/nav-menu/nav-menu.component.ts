import { Component } from '@angular/core';

import { LocaleService, Language, DefaultLocale, Currency } from 'angular-l10n';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  @Language() lang: string;
  @DefaultLocale() defaultLocale: string;
  @Currency() currency: string;

  isExpanded = false;

  constructor(public locale: LocaleService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  selectLocale(language: string, country: string, currency: string): void {
    this.locale.setDefaultLocale(language, country);
    this.locale.setCurrentCurrency(currency);
  }
}
