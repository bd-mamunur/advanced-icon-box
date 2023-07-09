import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE, ICON_SIZE } =
	constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	presetTwo: {
		type: 'string',
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

	titleColor: {
		type: 'string',
	},

	description: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},

	descAlign: {
		type: 'string',
	},

	bgColor: {
		type: 'string',
		default: '#EFFFF2',
	},
	bgHoverColor: {
		type: 'string',
	},
	bgBorder: {
		type: 'number',
	},
	bgBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	bgBorderColor: {
		type: 'string',
		default: '#ccc',
	},
	bgRadius: {
		type: 'number',
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
	btnBorder: {
		type: 'string',
		default: '#ccc',
	},
	btnColor: {
		type: 'string',
		default: '#ccc',
	},
	btnBorderColor: {
		type: 'string',
	},

	alignIcon: {
		type: 'string',
	},
	icon: {
		type: 'string',
		default: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
				<path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
			</svg>
		),
	},
	iconTopBottom: {
		type: 'string',
	},
	iconTopBottomR: {
		type: 'string',
	},
	iColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},

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
