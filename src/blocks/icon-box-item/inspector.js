/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	RadioControl,
	ColorPalette,
	CardDivider,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		titleColor,
		descColor,
		headingTag,
		contentTag,
		alignment,
		btnLabel,
		btnLink,
		btnTarget,
		btnbgcolor,
		btncolor,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<PanelBody title={__('Column Settings', 'bdt-blocks')}>
					<ResRangleControl
						label={__('Grid Columns', 'bdt-blocks')}
						controlName={GRID_COLUMNS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={4}
					/>
				</PanelBody>

				<PanelBody title="Alignment Icon" initialOpen={false}>
					<SelectControl
						label="Alignment"
						value={alignment}
						__nextHasNoMarginBottom
						options={[
							{ label: 'left', value: 'left' },
							{ label: 'center', value: 'center' },
							{ label: 'rignt', value: 'right' },
						]}
						onChange={(v) => {
							setAttributes({ alignment: v });
						}}
					/>
				</PanelBody>

				<PanelBody title="Title Tag" initialOpen={false}>
					<SelectControl
						label="HEADING TAG"
						value={headingTag}
						options={[
							{ label: 'h1', value: 'h1' },
							{ label: 'h2', value: 'h2' },
							{ label: 'h3', value: 'h3' },
							{ label: 'h4', value: 'h4' },
							{ label: 'h5', value: 'h5' },
							{ label: 'h6', value: 'h6' },
						]}
						onChange={(v) => {
							setAttributes({ headingTag: v });
						}}
					/>
				</PanelBody>
				<PanelBody title="Content Tag" initialOpen={false}>
					<SelectControl
						label="CONTENT TAG"
						value={contentTag}
						options={[
							{ label: 'p', value: 'p' },
							{ label: 'span', value: 'span' },
							{ label: 'div', value: 'div' },
							{ label: 'h1', value: 'h1' },
						]}
						onChange={(v) => {
							setAttributes({ contentTag: v });
						}}
					/>
				</PanelBody>

				<PanelBody title="Button Settings" initialOpen={false}>
					<TextControl
						label="Button Label"
						value={btnLabel}
						onChange={(v) => setAttributes({ btnLabel: v })}
					/>
					<TextControl
						label="Button Link"
						value={btnLink}
						onChange={(v) => setAttributes({ btnLink: v })}
					/>

					<RadioControl
						label="Target Tab"
						help={`The type of the current Tab ${btnTarget}`}
						selected={btnTarget}
						options={[
							{ label: 'New Tab', value: '_blank' },
							{ label: 'Self Tab', value: '_self' },
						]}
						onChange={(option) => {
							setAttributes({ btnTarget: option });
						}}
					/>
					<CardDivider />

					<h2>Button Bg Color</h2>

					<ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						value={btnbgcolor}
						onChange={(color) =>
							setAttributes({ btnbgcolor: color })
						}
					/>

					<h2>Button Text Color</h2>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						value={btncolor}
						onChange={(color) => setAttributes({ btncolor: color })}
					/>
				</PanelBody>

				<PanelColorSettings
					title={__('Color Settings', 'bdt-blocks')}
					initialOpen={false}
					colorSettings={[
						{
							value: titleColor,
							onChange: (value) =>
								setAttributes({ titleColor: value }),
							label: __('Title Color', 'bdt-blocks'),
						},
						{
							value: descColor,
							onChange: (value) =>
								setAttributes({ descColor: value }),
							label: __('Description Color', 'bdt-blocks'),
						},
					]}
				/>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
