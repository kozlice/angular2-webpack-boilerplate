import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

import { ArticleService } from 'app/article/article.service';
import { ArticleListComponent } from 'app/article/article-list.component';
import { ArticleComponent } from 'app/article/article.component';
import { Article } from 'app/article/article.model';

const exampleArticleList: Article[] = [
    {
        id: 1,
        title: 'Hello, world',
        body: 'Lorem ipsum dolor sit amet.',
        userId: 1
    },
    {
        id: 2,
        title: 'Good bye, world',
        body: 'Lorem ipsum dolor sit amet.',
        userId: 1
    }
];

/**
 * An example of component testing.
 */
describe('ArticleList Component', () => {
    let routerConfig: Route[] = [
        { path: 'articles/:id', component: ArticleComponent }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                RouterTestingModule.withRoutes(routerConfig)
            ],
            providers: [ArticleService],
            declarations: [ArticleListComponent, ArticleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        this.fixture = TestBed.createComponent(ArticleListComponent);
        this.comp = this.fixture.componentInstance;
        this.articleService = this.fixture.debugElement.injector.get(ArticleService);
        this.getAllArticlesSpy = spyOn(this.articleService, 'getAll').and.returnValue(Observable.of(exampleArticleList));
        this.el = this.fixture.debugElement.nativeElement;
    });

    it('should get articles from service', fakeAsync(() => {
        expect(this.getAllArticlesSpy).toHaveBeenCalledTimes(0);
        this.fixture.detectChanges();
        expect(this.getAllArticlesSpy).toHaveBeenCalledTimes(1);
        tick();
        this.fixture.detectChanges();
        expect(this.comp.articles).toEqual(exampleArticleList);
    }));
});
