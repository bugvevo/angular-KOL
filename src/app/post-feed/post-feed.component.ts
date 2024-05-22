import { Component } from '@angular/core';
import * as postData from '../../assets/data/posts.json';

@Component({
	selector: 'post-feed',
	templateUrl: './post-feed.component.html',
	styleUrls: ['./post-feed.component.scss'],
})
export class PostFeed {
	postData = postData;
	posts = this.postData.posts;
	ngOnInit() {
		console.log(postData);
	}
}
