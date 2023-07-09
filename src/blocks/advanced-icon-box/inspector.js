/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CardDivider, SelectControl } from '@wordpress/components';

import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS, COLUMNS_GAP } = Constants;

import objAttributes from './attributes';
/**
 * Internal dependencies
 */

const Inspector = ({ attributes, setAttributes }) => {
	const objAttrs = { attributes, setAttributes, objAttributes };
	const { preset, align } = attributes;

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
					max={4}
				/>

				<CardDivider />

				<ResRangleControl
					label={__('Columns Gap', 'advanced-icon-box')}
					controlName={COLUMNS_GAP}
					objAttrs={objAttrs}
					noUnits={false}
					max={100}
					min={0}
				/>
				<CardDivider />

				<SelectControl
					label={__('preset', 'advanced-icon-box')}
					value={preset}
					options={[
						{ label: 'Preset 1', value: 'style-1' },
						{ label: 'Preset 2', value: 'style-2' },
						{ label: 'Preset 3', value: 'style-3' },
						{ label: 'Preset 4', value: 'style-4' },
					]}
					onChange={(NewPreset) => {
						setAttributes({ preset: NewPreset });
					}}
				/>

				<SelectControl
					label={__('Container Width', 'advanced-icon-box')}
					value={align}
					options={[
						{ label: 'None', value: 'none' },
						{ label: 'Wide', value: 'wide' },
						{ label: 'Full', value: 'full' },
					]}
					onChange={(size) => {
						setAttributes({ align: size });
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
