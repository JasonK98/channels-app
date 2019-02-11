import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Channel } from '../channel/channel.model';
import { ChannelService } from '../channel.service';

@Component({
	selector: 'app-channel-secondary',
	templateUrl: './channel-secondary.component.html',
	styleUrls: ['./channel-secondary.component.css']
})
export class ChannelSecondaryComponent implements OnInit {

	@Input() primary: 		Channel;
	channels: 				Channel[] = [];
	newPrimary: 			Channel[] = [];
	key: 					string = 'name'; // Set default ordering
  	reverse: 				boolean = false;
  	itemsPerPage:			number = 10;	
  	page:					number = 1

	constructor( private channelService: ChannelService ) { }


	ngOnInit() {
		this.getChannels();
	}

	ngOnChanges( changes: SimpleChanges ) {
		for ( let propName in changes ) {
			let change = changes[ propName ];
			let curVal = JSON.parse( JSON.stringify( change.currentValue ) );
			let prevVal = JSON.stringify( change.previousValue );
			// If redudancy channel is set then should display selected channel
			// on the curent on index on the correct page
			if ( curVal.redundancy_id !== null ) {
				let index = this.channels.findIndex( channel => channel.id === this.channelService.primary.redundancy_id );
				let page = Math.ceil( index / this.itemsPerPage );
		    	this.page = ( page < 1 ) ? 1 : page; 
			} else {
				// Reset the page to 1 if no redudancy channel has been set
				this.page = 1;
			}
		}
	}

	getChannels(): void {
		this.channelService.getChannels()
			.subscribe( channels => this.channels = channels );
	}

	setClickedRow = function( index ) {
		var absoluteIndex = this.absoluteIndex( index );
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
    	if ( typeof this.channelService.secondary !== 'undefined' ) {
    		this.channelService.primary = redudancy;
    		this.channelService.secondary = channel;
    		if ( this.channelService.primary.redundancy_id === this.channelService.secondary.id ) {
	    		let index = this.channels.findIndex( channel => channel.id === this.channelService.primary.redundancy_id );
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
}
