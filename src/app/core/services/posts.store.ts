import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, resource } from '@angular/core';
import { injectParams } from 'ngxtension/inject-params';
import { lastValueFrom } from 'rxjs';
import { Post } from '../models/post.model';
@Injectable({
    providedIn: 'root'
})
export class PostsStore {
    private apiUrl = 'https://jsonplaceholder.typicode.com';
    private http = inject(HttpClient);
    postId = injectParams('id');

    postsResource = resource({
        params: () => ({}),
        loader: () => lastValueFrom(this.http.get<Post[]>(this.apiUrl + '/posts')),
    });

    userResource = resource({
        params: () => ({ id: this.postId() }),
        loader: ({ params }) => lastValueFrom(this.http.get<Post[]>(this.apiUrl + `/users/${params?.id}`)),
    });

    commentsResource = resource({
        params: () => ({ id: this.postId() }),
        loader: ({ params }) => lastValueFrom(this.http.get<Post[]>(this.apiUrl + `/posts/${params?.id}/comments`)),
    });


    constructor() { 
        effect(() => {
            console.log(`${this.postId()}`);
            console.log(`${this.postsResource.value()}`);
        });
    }
}