import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'da-app',
    template: require('./app.html'),
    styles: [
        require('./app.scss')
    ],
    encapsulation: ViewEncapsulation.Native,
    providers: [
        AppService
    ]
})
export class AppComponent {
    constructor(public appService: AppService) {

    }
}
