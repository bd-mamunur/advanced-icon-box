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
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

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
					label="Icon Picker"
					onHandle={(v) => setAttributes({ icons: v })}
					icon={[
						{
							name: 'man',
							value: '😎',
						},
						{
							name: 'football',
							value: '⚽',
						},
						{
							name: 'star',
							value: '😎',
						},

						{
							name: 'settings',
							value: (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
									fill="currentColor"
									className="bi bi-gear"
									viewBox="0 0 16 16"
								>
									<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
									<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
								</svg>
							),
						},
					]}
					objAttrs={objAttrs}
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
