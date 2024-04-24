import { Component } from '@angular/core';
import { InnerBrowserComponent } from './inner-browser/inner-browser.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [InnerBrowserComponent],
})
export class AppComponent {
	title = 'k-o-l';
	browserOpen = false;

	desktopIcons = [
		{
			name: 'one',
			imageSrc: './assets/images/BrowserIcon.png',
		},
		{
			name: 'two',
			imageSrc: './assets/images/BrowserIcon.png',
		},
		{
			name: 'Browser',
			imageSrc: './assets/images/BrowserIcon.png',
		},
	];

	clickShortcut(shortcutName: string) {
		switch (shortcutName) {
			case 'one': {
				console.log('you clicked one!');
				break;
			}
			case 'two': {
				console.log('you clicked two!');
				break;
			}
			case 'Browser': {
				this.clickBrowserIcon();
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
