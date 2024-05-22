import { Component } from '@angular/core';
import { MessageAction, MessageBusService } from '../message-bus.service';

@Component({
	selector: 'app-inner-browser',
	templateUrl: './inner-browser.component.html',
	styleUrls: ['./inner-browser.component.scss'],
})
export class InnerBrowserComponent {
	constructor(private messageBus: MessageBusService) {}

	closeBrowserWindow() {
		this.messageBus.push({
			type: MessageAction.BrowserClosed,
		});
	}
}
