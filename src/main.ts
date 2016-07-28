import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from 'app/app.component';

if (process.env.ENV === 'prod') {
    enableProdMode();
}

/**
 * TODO: Example service (HTTP interaction), routing, nested directives, pipe + related tests
 */
bootstrap(AppComponent);
