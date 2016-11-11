import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from './article.service';
import { Article } from './article.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches article from HTTP API and displays it.
 */
@Component({
    selector: 'da-article',
    templateUrl: './article.html',
    styleUrls: ['./article.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [ArticleService]
})
export class ArticleComponent implements OnInit, OnDestroy {
    private article: Article;
    private error: Response;
    private isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService
    ) {

    }

    /**
     * TODO: Note about non-observable param
     */
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.articleService.get(id).subscribe(
            (data)  => this.article = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
