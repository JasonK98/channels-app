import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Channel } from './channel/channel.model';
import { CHANNELS } from './channel/channel-mock';

@Injectable({
	providedIn: 'root'
})
export class ChannelService {

	channels	: Channel[] = CHANNELS;
	primary		: Channel;
	secondary	: Channel;
	
	constructor() { }

	getChannels(): Observable<Channel[]> {
		// Required deep copy to avoid json data being overwritten and passed as reference
		// this will pass the data in it's orginal format allowing it be unique to both
		// the primary and secondary channel lists.
		// This fixed problem with the ordering not being unique to each list.
		let channels = CHANNELS.map( x => Object.assign( {}, x ) );
		console.log( channels );
		return of( channels );
	}

	setRedudancy() {
		if ( this.primary.redudancy_id === this.secondary.id ) {
			if ( this.primary.redudancy_id !== null ) {
				this.primary.redudancy_id = null
			}
		} else {
			this.primary.redudancy_id = this.secondary.id;
		}
	}
}
