import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../channel/channel.model';
import { ChannelService } from '../channel.service';

@Component({
	selector: 'app-channel-secondary',
	templateUrl: './channel-secondary.component.html',
	styleUrls: ['./channel-secondary.component.css']
})
export class ChannelSecondaryComponent implements OnInit {

	@Input() primary: 		Channel[];
	channels: 				Channel[];
	newPrimary: 			Channel[] = [];
	key: 					string = 'name'; // Set default ordering
  	reverse: 				boolean = false;
  	itemsPerPage:			number = 10;	
  	page:					number = 1

	constructor( private channelService: ChannelService ) { }

	ngOnInit() {
		this.getChannels();
	}

	getChannels(): void {
		this.channelService.getChannels()
			.subscribe( channels => this.channels = channels );
	}

	setClickedRow = function( index ) {
		var absoluteIndex = this.absoluteIndex( index );
		console.log( absoluteIndex );
    	this.selectedRow = absoluteIndex;
    	this.channelService.secondary = this.channels[ absoluteIndex ];
    	this.channelService.setRedudancy();
    }
    
    sort( key ) {
    	this.key = key;
    	this.reverse = !this.reverse;
    }

    absoluteIndex( indexOnPage: number ): number {
    	return this.itemsPerPage * ( this.page - 1 ) + indexOnPage;
    }

    getIndex( redudancy: Channel, channel: Channel ): boolean {
    	console.log( this.channelService.primary );
    	console.log( this.channelService.secondary );
    	console.log( typeof this.channelService.secondary );
    	if ( typeof this.channelService.secondary !== 'undefined' ) {
    		this.channelService.primary = redudancy;
    		this.channelService.secondary = channel;
    		if ( this.channelService.primary.redudancy_id === this.channelService.secondary.id ) {
	    		let index = this.channels.findIndex( channel => channel.id === this.channelService.primary.redudancy_id );
		    	let page = Math.ceil( index / this.itemsPerPage );
		    	if ( page < 1 ) {
		    		this.page = 1;
		    		console.log( this.page );
		    	} else {
		    		console.log( 'calculation', Math.ceil( index / this.itemsPerPage ) );
		    		this.page = page;
		    		console.log( this.page );
		    	}
		    	return true;
	    	} else {
	    		console.log( "False" ); 
	    		return false;
	    	}
    	}
    }

    trackByFn( index, channel ) {
    	var absolute_index = this.itemsPerPage * ( this.page - 1 ) + index;
		console.log( absolute_index );
		//return ( page ) < 1 ? 1 : page;
    	return index;
    }
}
