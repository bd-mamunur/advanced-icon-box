/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CardDivider, RangeControl } from '@wordpress/components';

import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';
/**
 * Internal dependencies
 */

const Inspector = ({ attributes, setAttributes }) => {
	const objAttrs = { attributes, setAttributes, objAttributes };
	const { columGap } = attributes;
	return (
		<InspectorControls>
			<PanelBody
				title={__('Column Settings', 'advanced-icon-box')}
				initialOpen={true}
			>
				<ResRangleControl
					label={__('Grid Columns', 'advanced-icon-box')}
					controlName={GRID_COLUMNS}
					objAttrs={objAttrs}
					noUnits={true}
					min={1}
					max={10}
				/>

				<CardDivider />

				<RangeControl
					label={__('Columns Gap')}
					value={columGap}
					onChange={(column) => setAttributes({ columGap: column })}
					min={0}
					max={30}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
