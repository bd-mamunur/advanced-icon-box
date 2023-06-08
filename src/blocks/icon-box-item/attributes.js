import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	headingTag: {
		type: 'string',
	},
	contentTag: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	titleHoverColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},

	alignment: {
		type: 'string',
	},

	btnLinkObj: {
		type: 'object',
	},
	btnLabel: {
		type: 'string',
		default: 'Button',
	},
	btnLink: {
		type: 'string',
	},
	btnTarget: {
		type: 'string',
	},
	btnBgColor: {
		type: 'string',
		default: '#fff',
	},
	btnColor: {
		type: 'string',
		default: '#ccc',
	},
	btnBgHovercolor: {
		type: 'string',
		default: ' #e6ffe6',
	},
	btnHoverColor: {
		type: 'string',
		default: '#ec0707',
	},
	icons: {
		type: 'string',
	},
	align: {
		type: 'string',
	},
	icon: {
		type: 'string',
	},
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
};

export default attributes;
