export class Feed {
	id: number;
	name: string;
	channels: number[]

	constructor( id: number, name: string, channels: number[] ) {
		this.id = id;
		this.name = name;
		this.channels = channels;
	}
}