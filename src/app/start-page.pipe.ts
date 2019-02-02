import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: "pageStart"
} )
export class PageStartPipe {
	transform( currentPage: number, itemsPerPage: number, index: number ): number {
		var absolute_index = itemsPerPage * ( currentPage - 1 ) + index;
		var page = Math.ceil( absolute_index / itemsPerPage );
		return ( page ) < 1 ? 1 : page;
	}
}