import { Component, OnInit } from '@angular/core';

import { TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  title = 'app';

  constructor(public translation: TranslationService) { }

  ngOnInit(): void {
    this.translation.translationChanged().subscribe(
      () => { this.title = this.translation.translate('title'); }
    );
  }

}
