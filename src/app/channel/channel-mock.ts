import { Channel } from './channel.model';

export const CHANNELS: Channel[] = [
	{ id: 1, name: 'BBC One Scot', uri: '192.168.1.1', redundancy_id: null, enable: false },
	{ id: 2, name: 'BBC Two Scot', uri: '192.168.2.2', redundancy_id: null, enable: false },
	{ id: 22, name: 'BBC One Scot + 1', uri: '192.168.22.22', redundancy_id: null, enable: false },
	{ id: 33, name: 'STV', uri: '192.168.33.33', redundancy_id: null, enable: false },
	{ id: 44, name: 'Channel 4', uri: '192.168.44.44', redundancy_id: null, enable: false },
	{ id: 55, name: 'Channel 5', uri: '192.168.55.55', redundancy_id: null, enable: false },
	{ id: 66, name: 'Dave', uri: '192.168.66.66', redundancy_id: null, enable: false },
	{ id: 77, name: 'Cowden TV', uri: '192.168.77.77', redundancy_id: null, enable: false },
	{ id: 88, name: 'Cowden TV + 1', uri: '192.168.44.44', redundancy_id: null, enable: false },
	{ id: 99, name: 'South Park TV', uri: '192.168.99.99', redundancy_id: null, enable: false },
	{ id: 12, name: 'Greggs TV', uri: '192.168.12.12', redundancy_id: null, enable: false },
	{ id: 14, name: 'Greggs TV + 1', uri: '192.168.14.14', redundancy_id: null, enable: false },
	{ id: 16, name: 'Dave + 1', uri: '192.168.16.16', redundancy_id: null, enable: false },
	{ id: 18, name: 'BBC Three Revived', uri: '192.168.18.18', redundancy_id: null, enable: false },
	{ id: 20, name: 'BBC Three Backup Revival', uri: '192.168.20.20', redundancy_id: null, enable: false },
	{ id: 64, name: 'BBC Four', uri: '192.168.64.64', redundancy_id: null, enable: false },
	{ id: 84, name: 'BBC 1 Million', uri: '192.168.84.84', redundancy_id: null, enable: false },
	{ id: 94, name: 'BBC Four + 1', uri: '192.168.94.94', redundancy_id: null, enable: false },
	{ id: 104, name: 'BBC 1 Million + 1', uri: '192.168.104.10', redundancy_id: null, enable: false },
	{ id: 106, name: 'Just STV', uri: '192.168.108.18', redundancy_id: null, enable: false }
];