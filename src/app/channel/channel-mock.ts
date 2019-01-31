import { Channel } from './channel.model';

export const CHANNELS: Channel[] = [
	{ id: 1, name: 'BBC One Scot', uri: '192.168.1.1', redudancy_id: null, enable: false },
	{ id: 2, name: 'BBC Two Scot', uri: '192.168.2.2', redudancy_id: null, enable: false },
	{ id: 22, name: 'BBC One Scot Redudancy', uri: '192.168.22.22', redudancy_id: null, enable: false },
	{ id: 44, name: 'BBC Two Scot Redudancy', uri: '192.168.44.44', redudancy_id: null, enable: false }
];