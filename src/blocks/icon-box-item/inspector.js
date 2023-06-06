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
const { GRID_COLUMNS, TITLE_FONTSIZE, DESCRIPTION_FONTSIZE } = Constants;

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
		descHoverColor,
		contentTag,
		bgColor,
		bgHoverColor,
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
				initialOpen={true}
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
				<ResRangleControl
					label={__('Title Size', 'advanced-icon-box')}
					controlName={TITLE_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={22}
					min={5}
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
				<ResRangleControl
					label={__('Description Size', 'advanced-icon-box')}
					controlName={DESCRIPTION_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={22}
					min={5}
				/>
				<TabPanelControl
					normalComponents={
						<ColorControl
							label={__('Description color', 'advanced-icon-box')}
							color="#87878a"
							onChange={(desValu) =>
								setAttributes({ descColor: desValu })
							}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color="#bfc2c7"
							onChange={(deshoValue) =>
								setAttributes({ descHoverColor: deshoValue })
							}
						/>
					}
				/>
				<CardDivider />
				<TabPanelControl
					normalComponents={
						<ColorControl
							label={__('Background color', 'advanced-icon-box')}
							color="#6d99e3"
							onChange={(colorValue) =>
								setAttributes({ bgColor: colorValue })
							}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color="#2b3d5c"
							onChange={(hoverColor) =>
								setAttributes({ bgHoverColor: hoverColor })
							}
						/>
					}
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
							name: 'setting',
							value: '⚙️',
						},

						{
							name: 'network',
							value: '🌐',
						},

						{
							name: 'settings',
							value: '🌎',
						},
					]}
					objAttrs={objAttrs}
				/>
				<CardDivider />
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
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
