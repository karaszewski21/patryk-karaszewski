import { Component, inject } from '@angular/core';
import { Post } from '../../../../core/models/post.model';
import { RouterLink } from '@angular/router';
import { PostsStore } from '../../../../core/services/posts.store';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    imports: [RouterLink]
})
export class PostListComponent {
    postStore = inject(PostsStore)

    constructor() { }
}