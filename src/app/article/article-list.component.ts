import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { ArticleService } from './article.service';
import { Article } from './article.model';
import { Response } from '@angular/http';

/**
 * A simple component, which fetches articles list from HTTP API and displays them.
 */
@Component({
    selector: 'da-article-list',
    templateUrl: './article-list.html',
    styleUrls: ['./article-list.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [ArticleService]
})
export class ArticleListComponent implements OnInit, OnDestroy {
    private articles: Article[];
    private error: Response;
    private isLoading: boolean = true;

    constructor(private articleService: ArticleService) {}

    ngOnInit(): void {
        this.articleService.getAll().subscribe(
            (data)  => this.articles = data,
            (error) => this.error = error,
            ()      => this.isLoading = false
        );
    }

    ngOnDestroy(): void {}
}
