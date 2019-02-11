import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Feed } from './feeds/feed.model';

@Injectable({
	providedIn: 'root'
})
export class FeedsService {

	feedsUrl = "http://localhost:3000/feeds";

	constructor( private http: HttpClient ) { }

	getFeeds(): Observable<Feed[]> {
		return this.http.get<Feed[]>( this.feedsUrl );
	}
}
