export class Channel {
	id				: number;
	name			: string;
	uri				: string;
	redundancy_id	: number;

	constructor( id: number, name: string, uri: string, redundancy_id: number = null ) {
		this.id 			= id;
		this.name 			= name;
		this.uri 			= uri;
		this.redundancy_id 	= redundancy_id;
	}
}