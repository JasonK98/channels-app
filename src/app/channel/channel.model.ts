export class Channel {
	id				: number;
	name			: string;
	uri				: string;
	redudancy_id	: number;
	enable			: boolean;

	constructor( id: number, name: string, uri: string, redudancy_id: number, enable: boolean ) {
		this.id 			= id;
		this.name 			= name;
		this.uri 			= uri;
		this.redudancy_id 	= redudancy_id;
		this.enable			= enable;
	}
}