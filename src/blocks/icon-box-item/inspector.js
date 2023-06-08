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
	RangeControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl, ColorControl, TabPanelControl, IconPickerControl } =
	Controls;
const { TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE } = Constants;

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
		btnRadius,
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
							color={descColor}
							onChange={(desValu) =>
								setAttributes({ descColor: desValu })
							}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color={descHoverColor}
							onChange={(deshoValue) =>
								setAttributes({ descHoverColor: deshoValue })
							}
						/>
					}
				/>
			</PanelBody>

			<PanelBody
				title={__('Container', 'advanced-icon-box')}
				initialOpen={true}
			>
				<TabPanelControl
					normalComponents={
						<ColorControl
							label={__('Background color', 'advanced-icon-box')}
							color={bgColor}
							onChange={(colorValue) =>
								setAttributes({ bgColor: colorValue })
							}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color={bgHoverColor}
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
					label={__('Select My Icon', 'advanced-icon-box')}
					value={icon}
					onChange={(value) => setAttributes({ icon: value })}
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
				initialOpen={true}
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
				<CardDivider />
				<ResRangleControl
					label={__('Button Font Size', 'advanced-icon-box')}
					controlName={BUTTON_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={30}
					min={5}
				/>

				<RangeControl
					label={__('Button Radius', 'advanced-icon-box')}
					value={btnRadius}
					onChange={(btnValue) =>
						setAttributes({ btnRadius: btnValue })
					}
					min={2}
					max={30}
				/>

				<CardDivider />
				<TabPanelControl
					normalComponents={
						<>
							<ColorControl
								label={__(
									'Button Text Color',
									'advanced-icon-box'
								)}
								color={btnColor}
								onChange={(textValue) =>
									setAttributes({ btnColor: textValue })
								}
							/>
							<ColorControl
								label={__(
									'Background color',
									'advanced-icon-box'
								)}
								color={btnBgColor}
								onChange={(btnValue) =>
									setAttributes({ btnBgColor: btnValue })
								}
							/>
						</>
					}
					hoverComponents={
						<>
							<ColorControl
								label={__(
									'Button Hover Color',
									'advanced-icon-box'
								)}
								color={btnHoverColor}
								onChange={(textValue) =>
									setAttributes({ btnHoverColor: textValue })
								}
							/>
							<ColorControl
								label={__(
									'Background Hover Color',
									'advanced-icon-box'
								)}
								color={btnBgHovercolor}
								onChange={(btnValue) =>
									setAttributes({
										btnBgHovercolor: btnValue,
									})
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
