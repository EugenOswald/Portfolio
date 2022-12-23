import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

let docTitle = document.title;
window.addEventListener('blur', () => {
  document.title = 'Come back :(';
});
window.addEventListener('focus', () => {
  document.title = docTitle;
});
