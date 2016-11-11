import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Article } from './article.model';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

/**
 * A simple service which fetches data from HTTP API.
 *
 * TODO: Move API endpoint to app config
 */
@Injectable()
export class ArticleService {
    constructor(private http: Http) {}

    public get(id: number): Observable<Article> {
        return this.http
            .get(API_ENDPOINT + '/' + id)
            .map(this.extractData);
    }

    public getAll(): Observable<Article[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}
