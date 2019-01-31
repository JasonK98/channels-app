import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../channel/channel.model';
import { ChannelService } from '../channel.service';

@Component({
	selector: 'app-channel-secondary',
	templateUrl: './channel-secondary.component.html',
	styleUrls: ['./channel-secondary.component.css']
})
export class ChannelSecondaryComponent implements OnInit {

	@Input() primary: Channel[];

	channels: Channel[];

	newPrimary: Channel[] = [];

	constructor( private channelService: ChannelService ) { }

	ngOnInit() {
		this.getChannels();
	}

	getChannels(): void {
		this.channelService.getChannels()
			.subscribe( channels => this.channels = channels );
	}

	setClickedRow = function( index ) {
		this.channelService.isInList( index );
    	this.selectedRow = index;
    	this.channelService.secondary = this.channels[ index ];
    	this.channelService.setRedudancy();
    }
}
