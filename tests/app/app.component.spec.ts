import { addProviders, inject } from '@angular/core/testing';
import { AppService } from 'app/app.service';

describe('App Service', () => {
    beforeEach(() => addProviders([
        AppService
    ]));

    it('should return title', inject([AppService], (appService) => {
        expect(appService.getTitle()).toBe('Hello, world!');
    }));
});
