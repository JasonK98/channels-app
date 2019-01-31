import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Channel } from './channel/channel.model';
import { CHANNELS } from './channel/channel-mock';

@Injectable({
	providedIn: 'root'
})
export class ChannelService {

	primary		: Channel;
	secondary	: Channel;
	
	constructor() { }

	getChannels(): Observable<Channel[]> {
		return of( CHANNELS );
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
