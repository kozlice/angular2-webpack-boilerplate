import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * This stub was borrowed from official tutorial.
 */
@Injectable()
export class ActivatedRouteStub {
    private subject = new BehaviorSubject(this.testParams);
    params = this.subject.asObservable();

    private _testParams: {};
    get testParams() { return this._testParams; }
    set testParams(params: {}) {
        this._testParams = params;
        this.subject.next(params);
    }

    get snapshot() {
        return { params: this.testParams };
    }
}
