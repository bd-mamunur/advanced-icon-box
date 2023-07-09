import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS, COLUMNS_GAP } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	preset: {
		type: 'string',
	},
	// support align setup
	align: {
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
		controlName: COLUMNS_GAP,
		defaults: {
			[`${COLUMNS_GAP}DeskRange`]: 3,
			[`${COLUMNS_GAP}TabRange`]: 2,
			[`${COLUMNS_GAP}MobRange`]: 1,
			[`${COLUMNS_GAP}Unit`]: 'px',
		},
	}),
};

export default attributes;
