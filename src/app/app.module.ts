import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerBrowserComponent } from './inner-browser/inner-browser.component';
import { CommonModule } from '@angular/common';
import { PostFeed } from './post-feed/post-feed.component';

@NgModule({
	declarations: [AppComponent, InnerBrowserComponent, PostFeed],
	imports: [BrowserModule, AppRoutingModule, CommonModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
