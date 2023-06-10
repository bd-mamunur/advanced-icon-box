import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS, TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE } =
	constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
		default: 18,
	},
	headingTag: {
		type: 'string',
	},
	contentTag: {
		type: 'string',
	},
	titleAlign: {
		type: 'string',
	},
	titleCase: {
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
	descHoverColor: {
		type: 'string',
	},
	descAlign: {
		type: 'string',
	},
	descCase: {
		type: 'string',
	},
	bgColor: {
		type: 'string',
	},
	bgHoverColor: {
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
	btnAlign: {
		type: 'string',
		default: 'left',
	},
	btnRadius: {
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
		default: '#e6ffe6',
	},
	btnHoverColor: {
		type: 'string',
		default: '#ec0707',
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

	...generateResRangleControlAttributes({
		controlName: TITLE_FONTSIZE,
		defaults: {
			[`${TITLE_FONTSIZE}DeskRange`]: 20,
			[`${TITLE_FONTSIZE}TabRange`]: 15,
			[`${TITLE_FONTSIZE}MobRange`]: 10,
		},
	}),

	...generateResRangleControlAttributes({
		controlName: DESCRIPTION_FONTSIZE,
		defaults: {
			[`${DESCRIPTION_FONTSIZE}DeskRange`]: 14,
			[`${DESCRIPTION_FONTSIZE}TabRange`]: 12,
			[`${DESCRIPTION_FONTSIZE}MobRange`]: 10,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BUTTON_FONTSIZE,
		defaults: {
			[`${BUTTON_FONTSIZE}DeskRange`]: 14,
			[`${BUTTON_FONTSIZE}TabRange`]: 12,
			[`${BUTTON_FONTSIZE}MobRange`]: 10,
		},
	}),
};

export default attributes;
