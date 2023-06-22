import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const {
	GRID_COLUMNS,
	TITLE_FONTSIZE,
	DESCRIPTION_FONTSIZE,
	BUTTON_FONTSIZE,
	ICON_SIZE,
} = constants;

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
	titleRadius: {
		type: 'string',
	},
	titleBgColor: {
		type: 'string',
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	contentTag: {
		type: 'string',
		default: 'p',
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
		default: '#EFFFF2',
	},
	bgHoverColor: {
		type: 'string',
	},
	alignment: {
		type: 'string',
	},
	iconAlign: {
		type: 'string',
	},
	iconRadius: {
		type: 'object',
		default: {
			top: '0px',
			left: '0px',
			bottom: '0px',
			right: '0px',
		},
	},
	btnLinkObj: {
		type: 'object',
	},
	btnLabel: {
		type: 'string',
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

	alignIcon: {
		type: 'string',
	},
	icon: {
		type: 'string',
	},
	iconTopBottom: {
		type: 'string',
	},
	iconTopBottomR: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	iconHoverColor: {
		type: 'string',
	},
	preset: {
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
			[`${TITLE_FONTSIZE}Unit`]: 'px',
		},
	}),

	...generateResRangleControlAttributes({
		controlName: DESCRIPTION_FONTSIZE,
		defaults: {
			[`${DESCRIPTION_FONTSIZE}DeskRange`]: 14,
			[`${DESCRIPTION_FONTSIZE}TabRange`]: 12,
			[`${DESCRIPTION_FONTSIZE}MobRange`]: 10,
			[`${DESCRIPTION_FONTSIZE}Unit`]: 'px',
		},
	}),
	...generateResRangleControlAttributes({
		controlName: BUTTON_FONTSIZE,
		defaults: {
			[`${BUTTON_FONTSIZE}DeskRange`]: 14,
			[`${BUTTON_FONTSIZE}TabRange`]: 12,
			[`${BUTTON_FONTSIZE}MobRange`]: 10,
			[`${BUTTON_FONTSIZE}Unit`]: 'px',
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ICON_SIZE,
		defaults: {
			[`${ICON_SIZE}DeskRange`]: 30,
			[`${ICON_SIZE}TabRange`]: 22,
			[`${ICON_SIZE}MobRange`]: 10,
			[`${ICON_SIZE}Unit`]: 'px',
		},
	}),
};

export default attributes;
