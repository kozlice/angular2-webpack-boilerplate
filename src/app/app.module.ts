import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from 'app/app.component';
import { ArticleComponent } from 'app/article/article.component';
import { ArticleListComponent } from 'app/article/article-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
