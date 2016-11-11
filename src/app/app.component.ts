import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Styles required here are common for all components (SASS/SCSS versions of normalize.css and flexboxgrid),
 * so encapsulation is not used. Other components have their styles scoped with `ViewEncapsulation.Emulated`.
 */
@Component({
    selector: 'da-app',
    templateUrl: './app.html',
    styleUrls: ['./app.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: []
})
export class AppComponent {}
