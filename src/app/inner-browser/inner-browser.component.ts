import { Component } from '@angular/core';

@Component({
	selector: 'app-inner-browser',
	templateUrl: './inner-browser.component.html',
	styleUrls: ['./inner-browser.component.scss'],
})
export class InnerBrowserComponent {
	closeBrowserWindow() {
		console.log('closed mama');
	}
}
