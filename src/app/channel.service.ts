import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Channel } from './channel/channel.model';
import { CHANNELS } from './channel/channel-mock';

@Injectable({
	providedIn: 'root'
})
export class ChannelService {

	primary		: Channel[];
	secondary	: Channel[];

	constructor() { }

	getChannels(): Observable<Channel[]> {
		return of( CHANNELS );
	}

	setRedudancy() {
		// var json = JSON.stringify( this.primary );
		// console.log( JSON );
		// console.log( this.secondary );
		// this.primary.redudancy_id = this.secondary.id;
		//console.log( this.primary );
		//console.log( this.secondary );
		if ( this.primary.redudancy_id === this.secondary.id ) {
			if ( this.primary.redudancy_id !== null ) {
				this.primary.redudancy_id = null
			}
		} else {
			this.primary.redudancy_id = this.secondary.id;
		}
	}

	setRedudancyChannel( index ) {
		// if ( CHANNELS[ index ].redudancy_id !== null ) {
		// 	CHANNELS[ index ].redudancy_id = null;
		// } 
	}

	isSelected( index ) {
		// if ( CHANNELS[ index ].redudancy_id !== null ) {
		// 	return true;
		// }
	}

	isInList( index ) {
		console.log( this.primary.redudancy_id );
		if ( this.primary.redudancy_id !== null ) {
			//CHANNELS[ index ].redudancy_id = null;
		}
		console.log( CHANNELS[ index ].redudancy_id );
	}

}
