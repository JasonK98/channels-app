import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Channel } from './channel/channel.model';
import { CHANNELS } from './channel/channel-mock';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})

export class ChannelService {

	channelsUrl = "http://localhost:3000/channels";

	channels	: Channel[] = CHANNELS;
	primary		: Channel;
	secondary	: Channel;

	constructor( private http: HttpClient ) { }

	getChannels(): Observable<Channel[]> {
		return this.http.get<Channel[]>( this.channelsUrl )
	}

	setRedudancy() {
		if ( this.primary.redundancy_id === this.secondary.id ) {
			if ( this.primary.redundancy_id !== null ) {
				this.primary.redundancy_id = null
			}
		} else {
			this.primary.redundancy_id = this.secondary.id;
		}
		this.updateChannel( this.primary )
			.subscribe( ( data ) => {
				if ( typeof data === 'object' ) {
					console.log( data );
				} else {
					this.primary.redundancy_id = null;
				}
			} );
	}

	// Update existing Hero
	private updateChannel(channel: Channel) {
	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  let url = `${this.channelsUrl}/${channel.id}`;

	  return this.http
	             .put(url, JSON.stringify(channel), httpOptions);
	}

}
