import {
    beforeEachProviders,
    it,
    inject,
    expect
} from '@angular/core/testing';

import { AppService } from '../../src/app/app.service';

describe('App Service', () => {
    beforeEachProviders(() => {
        return [
            AppService
        ];
    });

    it('should return title', inject([AppService], (appService) => {
        expect(appService.getTitle()).toBe('Hello, world!');
    }));
});
