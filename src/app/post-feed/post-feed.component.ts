import { Component } from '@angular/core';
import * as postData from '../../assets/data/posts.json';
import { Post } from '../app-types';

@Component({
	selector: 'post-feed',
	templateUrl: './post-feed.component.html',
	styleUrls: ['./post-feed.component.scss'],
})
export class PostFeed {
	postData = postData;
	allPosts = this.postData.posts;

	availablePosts: Post[] = [];

	propagatedPosts: Post[] = [];
	ignoredPosts: Post[] = [];
	censoredPosts: Post[] = [];

	ngOnInit() {
		this.allPosts.forEach((value) => this.availablePosts.push(Object.assign({}, value)));
	}
}
