import { Component } from '@angular/core';
import * as postData from '../../assets/data/posts.json';
import { AlignmentPointsData, Post } from '../app-types';
import { MessageAction, MessageBusService } from '../message-bus.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'post-feed',
	templateUrl: './post-feed.component.html',
	styleUrls: ['./post-feed.component.scss'],
})
export class PostFeed {
	private subscriptions: Subscription[] = [];

	postData = postData;
	allPosts = this.postData.posts;

	availablePosts: Post[] = [];

	alignmentTotals: AlignmentPointsData = {
		state: 0,
		liberation: 0,
		passive: 0,
	};

	constructor(private messageBus: MessageBusService) {}

	ngOnInit() {
		this.allPosts.forEach((rawPost) =>
			this.availablePosts.push(
				Object.assign({
					username: rawPost.username,
					quantifiedAlignment: {
						alignment: rawPost.alignment,
						magnitude: rawPost.magnitude,
					},
					location: rawPost.location,
					date: rawPost.date,
					text: rawPost.text,
				})
			)
		);
	}

	ngOnChanges() {
		this.messageBus.push({
			type: MessageAction.PostInteraction,
			data: {
				availablePosts: this.availablePosts,
				alignmentTotals: this.alignmentTotals,
			},
		});
	}

	propagatePost(index: number) {
		const post = this.availablePosts[index];
		const alignment = post.quantifiedAlignment.alignment as keyof AlignmentPointsData;
		const magnitude: number = post.quantifiedAlignment.magnitude;

		this.alignmentTotals[alignment] += magnitude;

		this.availablePosts.splice(index, 1);
	}

	ignorePost(index: number) {
		const post = this.availablePosts[index];
		const alignment = post.quantifiedAlignment.alignment as keyof AlignmentPointsData;
		const magnitude: number = post.quantifiedAlignment.magnitude;

		this.alignmentTotals[alignment] += magnitude / 2;

		this.availablePosts.splice(index, 1);
	}

	censorPost(index: number) {
		const post = this.availablePosts[index];

		this.availablePosts.splice(index, 1);

		const alignment = post.quantifiedAlignment.alignment as keyof AlignmentPointsData;
		const magnitude: number = post.quantifiedAlignment.magnitude;

		if (alignment === 'passive') {
			return;
		} else if (alignment === 'state') {
			this.alignmentTotals['liberation'] += magnitude;
		} else if (alignment === 'liberation') {
			this.alignmentTotals['state'] += magnitude;
		}
	}
}
