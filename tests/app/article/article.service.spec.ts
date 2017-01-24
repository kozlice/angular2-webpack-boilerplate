import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Article } from '../../../src/app/article/article.model';
import { ArticleService } from '../../../src/app/article/article.service';

const exampleArticleList: Article[] = [
    {
        id: 1,
        title: 'Hello, world',
        body: 'Lorem ipsum dolor sit amet.',
        userId: 1
    }
];

/**
 * An example of service testing with HTTP response mocking.
 */
describe('Article Service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ArticleService,
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions)
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

    it('should fetch single article', inject([ArticleService, MockBackend], (articleService: ArticleService, backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({
            body: JSON.stringify(exampleArticleList[0])
        }));

        backend.connections.subscribe((c: MockConnection) => {
            c.mockRespond(baseResponse);
        });

        articleService.get(1).subscribe((data) => {
            expect(data).toEqual(exampleArticleList[0]);
        });
    }));

    it('should fetch multiple articles', inject([ArticleService, MockBackend], (articleService: ArticleService, backend: MockBackend) => {
        const baseResponse = new Response(new ResponseOptions({
            body: JSON.stringify(exampleArticleList)
        }));

        backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));

        articleService.getAll().subscribe((data) => {
            expect(data).toEqual(exampleArticleList);
        });
    }));
});
