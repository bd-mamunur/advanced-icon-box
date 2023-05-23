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
	description: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},

	alignment: {
		type: 'string',
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
	btnbgcolor: {
		type: 'string',
		default: '#ec0707',
	},
	btncolor: {
		type: 'string',
		default: '#ec0707',
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
