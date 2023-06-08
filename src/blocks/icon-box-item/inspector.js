/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	CardDivider,
	TextareaControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl, ColorControl, TabPanelControl, IconPickerControl } =
	Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

const headingTagOptions = [
	{ label: 'h1', value: 'h1' },
	{ label: 'h2', value: 'h2' },
	{ label: 'h3', value: 'h3' },
	{ label: 'h4', value: 'h4' },
	{ label: 'h5', value: 'h5' },
	{ label: 'h6', value: 'h6' },
	{ label: 'div', value: 'div' },
	{ label: 'span', value: 'span' },
	{ label: 'p', value: 'p' },
];

const Inspector = ({ attributes, setAttributes }) => {
	const {
		title,
		headingTag,
		titleColor,
		titleHoverColor,
		description,
		descColor,
		contentTag,
		btnLabel,
		alignment,
		btnBgColor,
		btnColor,
		btnBgHovercolor,
		btnHoverColor,
		icons,
		btnLinkObj,
		gridLine,
		icon,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	console.log(icon);

	return (
		<InspectorControls>
			<PanelBody
				title={__('Content', 'advanced-icon-box')}
				initialOpen={false}
			>
				<TextControl
					label={__('Title', 'advanced-icon-box')}
					onChange={(value) =>
						setAttributes({
							title: value,
						})
					}
					value={title}
					placeholder={__('Enter title', 'advanced-icon-box')}
				/>
				<SelectControl
					label={__('Title Tag', 'advanced-icon-box')}
					value={headingTag}
					onChange={(value) =>
						setAttributes({
							headingTag: value,
						})
					}
					options={headingTagOptions}
				/>
				<CardDivider />
				<TextareaControl
					help={__(
						'Enter description. Press Enter to create a new line.',
						'advanced-icon-box'
					)}
					label={__('Description', 'advanced-icon-box')}
					onChange={(text) =>
						setAttributes({
							description: text,
						})
					}
					value={description}
					placeholder={__('Enter description', 'advanced-icon-box')}
				/>
				<SelectControl
					label={__('Description Tag', 'advanced-icon-box')}
					value={contentTag}
					onChange={(value) =>
						setAttributes({
							contentTag: value,
						})
					}
					options={headingTagOptions}
				/>
			</PanelBody>

			<PanelBody
				title={__('Icon Picker', 'advacned-icon-box')}
				initialOpen={true}
			>
				<IconPickerControl
					label={__('Select My Icon', 'advanced-icon-box')}
					value={icon}
					onChange={(value) => setAttributes({ icon: value })}
				/>
			</PanelBody>

			<PanelBody
				title={__('Advanced Icon Settings', 'advanced-icon-box')}
				initialOpen={true}
			>
				<IconPickerControl
					label={__('Alignment', 'advanced-icon-box')}
					onHandle={(v) => setAttributes({ alignment: v })}
					className="btn-align"
					variant="primary"
					iconv=""
					icon={[
						{ name: 'editor-alignleft', value: 'left' },
						{ name: 'editor-aligncenter', value: 'center' },
						{ name: 'editor-alignleft', value: 'right' },
					]}
					objAttrs={objAttrs}
				/>
			</PanelBody>

			<PanelBody
				title={__('Title Tag', 'advanced-icon-box')}
				initialOpen={true}
			>
				<SelectControl
					label={__('HEADING TAG', 'advanced-icon-box')}
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

				<TabPanelControl
					normalComponents={
						<ColorControl
							label={__('Color', 'advanced-icon-box')}
							color={titleColor}
							onChange={(colorValu) =>
								setAttributes({
									titleColor: colorValu,
								})
							}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color={titleHoverColor}
							onChange={(colorValu) =>
								setAttributes({
									titleHoverColor: colorValu,
								})
							}
						/>
					}
				/>
			</PanelBody>
			<PanelBody
				title={__('Content Tag', 'advanced-icon-box')}
				initialOpen={false}
			>
				<SelectControl
					label={__('CONTENT TAG', 'advanced-icon-box')}
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

			<PanelBody
				title={__('Button Settings', 'advanced-icon-box')}
				initialOpen={false}
			>
				<TextControl
					label={__('Button Label', 'advanced-icon-box')}
					value={btnLabel}
					onChange={(v) => setAttributes({ btnLabel: v })}
				/>
				<LinkControl
					searchInputPlaceholder="Search here..."
					value={btnLinkObj}
					settings={[
						{
							id: 'openInNewTab',
							title: 'Open in new tab?',
						},
					]}
					onChange={(data) => setAttributes({ btnLinkObj: data })}
				/>

				<TabPanelControl
					normalComponents={
						<>
							<ColorControl
								label={__(
									'Background Color',
									'advanced-icon-box'
								)}
								color={btnBgColor}
								onChange={(colorValu) =>
									setAttributes({ btnBgColor: colorValu })
								}
							/>
							<CardDivider />
							<ColorControl
								label={__('Color', 'advanced-icon-box')}
								color={btnColor}
								onChange={(colorValu) =>
									setAttributes({ btnColor: colorValu })
								}
							/>
						</>
					}
					hoverComponents={
						<>
							<ColorControl
								label={__(
									'Bg Hover Color',
									'advanced-icon-box'
								)}
								color={btnBgHovercolor}
								onChange={(colorValu) =>
									setAttributes({
										btnBgHovercolor: colorValu,
									})
								}
							/>
							<CardDivider />
							<ColorControl
								label={__('Color', 'advanced-icon-box')}
								color={btnHoverColor}
								onChange={(colorValu) =>
									setAttributes({ btnHoverColor: colorValu })
								}
							/>
						</>
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
