import { Component, inject } from '@angular/core';
import { PostsStore } from '../../../../core/services/posts.store';
@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    providers: [PostsStore]
})
export class PostDetailsComponent {
    postStore = inject(PostsStore);
    constructor() { }
}