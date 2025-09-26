import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/posts/pages/post-list/post-list.component').then(m => m.PostListComponent)
    },
    {
        path: 'post-details/:id',
        loadComponent: () => import('./features/posts/pages/post-details/post-details.component').then(m => m.PostDetailsComponent)
    },
];
