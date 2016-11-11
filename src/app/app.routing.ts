import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article/article-list.component';

const appRoutes: Routes = [
    { path: 'articles/:id', component: ArticleComponent },
    { path: '', component: ArticleListComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
