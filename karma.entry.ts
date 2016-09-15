/**
 * TODO: Comments
 *
 * Order matters here for zone.js modules
 */
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import 'ts-helpers';

import { TestBed } from '@angular/core/testing';
import * as browser from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
    browser.BrowserDynamicTestingModule,
    browser.platformBrowserDynamicTesting()
);

let testContext = (<{ context?: Function }>require).context('./tests', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);

let coverageContext = (<{ context?: Function }>require).context('./src/app', true, /\.ts/);
coverageContext.keys().forEach(coverageContext);
