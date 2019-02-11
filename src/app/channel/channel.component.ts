import { Component, OnInit } from '@angular/core';

import { Channel } from './channel.model';
import { ChannelService } from '../channel.service';

@Component({
	selector: 'app-channel',
	templateUrl: './channel.component.html',
	styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

	selectedRow: 		number;
	channels: 			Channel[] = [];
	primaryChannel: 	Channel[];
	key: 				string = 'name'; //set default
  	reverse: 			boolean = false;
  	page:				number = 1;

	constructor( private channelService: ChannelService ) { }

	ngOnInit() {
		this.getChannels();
	}

	getChannels(): void {
		this.channelService.getChannels()
			.subscribe( channels => {
				this.channels = channels;
			} );
	}

	setClickedRow = function( index, channel ) {
    	this.selectedRow = index;
    	this.primaryChannel = channel;
    	this.channelService.primary = channel;
    }

    sort( key ) {
    	this.key = key;
    	this.reverse = !this.reverse;
    }
}
