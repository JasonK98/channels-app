import { Component, OnInit } from '@angular/core';

import { Channel } from '../channel/channel.model';
import { Feed } from '../feeds/feed.model';

import { ChannelService } from '../channel.service';
import { FeedsService } from '../feeds.service';

@Component({
	selector: 'app-feeds',
	templateUrl: './feeds.component.html',
	styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

	channels: 				Channel[] = [];
	feeds:					Feed[] = [];
	key: 					string = 'name'; // Set default ordering
  	reverse: 				boolean = false;
  	itemsPerPage:			number = 10;	
  	page:					number = 1
  	currentFeedIndex:		number;
  	feed:					Feed[];

	constructor( 
		private channelService: ChannelService, 
		private feedsService: FeedsService ) { }

	ngOnInit() {
		this.getChannels();
		this.getFeeds();
	}

	getChannels(): void {
		this.channelService.getChannels()
			.subscribe( channels => {
				this.channels = channels;
			} );
	}

	getFeeds(): void {
		this.feedsService.getFeeds()
			.subscribe( feeds => {
				this.feeds = feeds;
			} )
	}

	selectFeed( index, feed ) {
		this.currentFeedIndex = index;
		this.feed = feed;
	}
}
