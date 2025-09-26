import { Component } from '@angular/core';
import { Post } from '../../../../core/models/post.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    imports: [RouterLink]
})
export class PostListComponent {
    posts: Post[] = [
        { id: 1, title: 'Post 1', body: 'Body of post 1' },
        { id: 2, title: 'Post 2', body: 'Body of post 2' },
        { id: 3, title: 'Post 3', body: 'Body of post 3' },
        { id: 4, title: 'Post 4', body: 'Body of post 4' },
        { id: 5, title: 'Post 5', body: 'Body of post 5' },
        { id: 6, title: 'Post 6', body: 'Body of post 6' },
        { id: 7, title: 'Post 7', body: 'Body of post 7' },
        { id: 8, title: 'Post 8', body: 'Body of post 8' },
        { id: 9, title: 'Post 9', body: 'Body of post 9' },
        { id: 10, title: 'Post 10', body: 'Body of post 10'}
    ];

    constructor() { }
}