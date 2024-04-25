import { Component, OnInit } from '@angular/core';
import { InnerBrowserComponent } from './inner-browser/inner-browser.component';
import { Subscription } from 'rxjs';
import { MessageAction, MessageBusService } from './message-bus.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [InnerBrowserComponent, MessageBusService],
})
export class AppComponent implements OnInit {
	private subscriptions: Subscription[] = [];

	notifications: Notification[] = [];

	constructor(private messageBus: MessageBusService) {}

	ngOnInit() {
		this.subscriptions = [
			this.messageBus
				.observe(MessageAction.BrowserClosed)
				.subscribe((_) => (this.browserOpen = false)),
		];
	}

	title = 'k-o-l';
	browserOpen = false;

	desktopIcons = [
		{
			name: 'Browser',
			imageSrc: './assets/images/iconKernia.png',
		},
		{
			name: 'HeartBound2: Bound Hearter',
			imageSrc: './assets/images/iconHeartboundish.png',
		},
		{
			name: 'The Doom Scolls Online: Calamity',
			imageSrc: './assets/images/iconDoomscrolls.png',
		},
		{
			name: 'readme.txt',
			imageSrc: './assets/images/readme.png',
		},
	];

	clickShortcut(shortcutName: string) {
		switch (shortcutName) {
			case 'Browser': {
				this.clickBrowserIcon();
				break;
			}
			default: {
				break;
			}
		}
	}

	clickBrowserIcon() {
		if (this.browserOpen) {
			return;
		} else {
			this.browserOpen = true;
		}
	}

	onStartClick() {
		alert('hello');
	}
}
