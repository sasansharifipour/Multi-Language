import { Component } from '@angular/core';

import { Language, DefaultLocale, Currency } from 'angular-l10n';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  @Language() lang: string;
  @DefaultLocale() defaultLocale: string;
  @Currency() currency: string;

  public incrementCounter() {
    this.currentCount++;
  }
}
