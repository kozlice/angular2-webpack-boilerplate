import { TestBed, inject } from '@angular/core/testing';
import { AppService } from 'app/app.service';
import { AppComponent } from 'app/app.component';

describe('App Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ],
            providers: [ AppService ]
        });
    });

    it('should return title', inject([ AppService ], (appService: AppService) => {
        expect(appService.getTitle()).toBe('Hello, world!');
    }));
});
