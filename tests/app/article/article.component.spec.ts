import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

import { ArticleService } from '../../../src/app/article/article.service';
import { Article } from '../../../src/app/article/article.model';
import { ActivatedRouteStub } from '../../activated-route-stub';
import { ArticleComponent } from '../../../src/app/article/article.component';

const exampleArticle: Article = {
    id: 2,
    title: 'Good bye, world',
    body: 'Lorem ipsum dolor sit amet.',
    userId: 1
};

/**
 * An example of component testing.
 */
describe('Article Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                ArticleService,
                { provide: ActivatedRoute, useClass: ActivatedRouteStub }
            ],
            declarations: [ArticleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        this.fixture = TestBed.createComponent(ArticleComponent);
        this.comp = this.fixture.componentInstance;
        this.articleService = this.fixture.debugElement.injector.get(ArticleService);
        this.getArticleSpy = spyOn(this.articleService, 'get').and.returnValue(Observable.of(exampleArticle));
        this.el = this.fixture.debugElement.nativeElement;
        this.fixture.debugElement.injector.get(ActivatedRoute).testParams = { id: exampleArticle.id }
    });

    it('should get article from service', fakeAsync(() => {
        expect(this.getArticleSpy).toHaveBeenCalledTimes(0);
        this.fixture.detectChanges();
        expect(this.getArticleSpy).toHaveBeenCalledWith(exampleArticle.id);
        tick();
        this.fixture.detectChanges();
        expect(this.comp.article).toEqual(exampleArticle);
    }));
});
