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
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl, ColorControl, TabPanelControl, IconPickerControl } =
	Controls;
const { TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE, ICON_SIZE } =
	Constants;

import objAttributes from './attributes';
import AlignmentControl from '../../controls/alignment-control';

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
const alignIconOption = [
	{ name: 'editor-alignleft', value: 'left' },
	{ name: 'editor-aligncenter', value: 'center' },
	{ name: 'editor-alignright', value: 'right' },
];
const alignIconOptionTwo = [
	{ name: 'editor-alignleft', value: 'normal' },
	{ name: 'editor-aligncenter', value: 'center' },
	{ name: 'editor-alignright', value: 'end' },
];

const Inspector = ({ attributes, setAttributes }) => {
	const {
		iconRadius,
		title,
		titleAlign,
		headingTag,
		titleColor,
		description,
		descColor,
		descAlign,
		descCase,
		contentTag,
		bgColor,
		bgHoverColor,
		iconAlign,
		btnLabel,
		btnRadius,
		btnAlign,
		titleCase,
		btnBgColor,
		btnColor,
		btnBgHovercolor,
		btnHoverColor,
		btnLinkObj,
		icon,
		iconTopBottom,
		iconTopBottomR,
		alignIcon,
		iconColor,
		presetTwo,
	} = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<InspectorControls>
			<PanelBody
				title={__('General', 'advanced-icon-box')}
				initialOpen={false}
			>
				<TabPanelControl
					normalComponents={
						<ColorControl
							label={__('Background color', 'advanced-icon-box')}
							color={bgColor}
							colorName="bgColor"
							onChange={setAttributes}
						/>
					}
					hoverComponents={
						<ColorControl
							label={__('Hover Color', 'advanced-icon-box')}
							color={bgHoverColor}
							colorName="bgHoverColor"
							onChange={setAttributes}
						/>
					}
				/>
			</PanelBody>
			<PanelBody
				title={__('Title', 'advanced-icon-box')}
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
				<ResRangleControl
					label={__('Title Size', 'advanced-icon-box')}
					controlName={TITLE_FONTSIZE}
					objAttrs={objAttrs}
					noUnits={false}
					max={100}
					min={5}
				/>

				<SelectControl
					label="Title Case Style"
					value={titleCase}
					options={[
						{ label: 'Lowercase', value: 'lowercase' },
						{ label: 'Capitalize', value: 'capitalize' },
						{ label: 'Uppercase', value: 'uppercase' },
					]}
					onChange={(value) =>
						setAttributes({
							titleCase: value,
						})
					}
				/>

				<AlignmentControl
					label={__('Title Alignment', 'advanced-icon-box')}
					value={titleAlign}
					onChange={(value) =>
						setAttributes({
							titleAlign: value,
						})
					}
					options={alignIconOption}
				/>
				<CardDivider />

				<ColorControl
					label={__('Title Color', 'advanced-icon-box')}
					color={titleColor}
					colorName="titleColor"
					onChange={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__('Description', 'advanced-icon-box')}
				initialOpen={false}
			>
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
					max={50}
					min={5}
				/>

				<SelectControl
					label="Description Case Style"
					value={descCase}
					options={[
						{ label: 'Lowercase', value: 'lowercase' },
						{ label: 'Capitalize', value: 'capitalize' },
						{ label: 'Uppercase', value: 'uppercase' },
					]}
					onChange={(value) =>
						setAttributes({
							descCase: value,
						})
					}
				/>

				<AlignmentControl
					label={__('Description Alignment', 'advanced-icon-box')}
					value={descAlign}
					onChange={(value) =>
						setAttributes({
							descAlign: value,
						})
					}
					options={alignIconOption}
				/>
				<CardDivider />
				<ColorControl
					label={__('Description color', 'advanced-icon-box')}
					color={descColor}
					colorName="descColor"
					onChange={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__('Icon', 'advacned-icon-box')}
				initialOpen={false}
			>
				<IconPickerControl
					label={__('Select Icon', 'advanced-icon-box')}
					value={icon}
					onChange={(value) => setAttributes({ icon: value })}
				/>

				<CardDivider />
				<ResRangleControl
					label={__('icon Size', 'advanced-icon-box')}
					controlName={ICON_SIZE}
					objAttrs={objAttrs}
					units={['px', '%']}
					noUnits={false}
					max={100}
					min={1}
				/>
				<CardDivider />
				<BoxControl
					label={__('Border Radius', 'advanced-icon-box')}
					values={iconRadius}
					onChange={(v) => setAttributes({ iconRadius: v })}
				/>
				{presetTwo === 'style-1' && (
					<AlignmentControl
						label={__('Icon Alignment', 'advanced-icon-box')}
						value={iconAlign}
						onChange={(value) =>
							setAttributes({
								iconAlign: value,
							})
						}
						options={alignIconOption}
					/>
				)}
				{presetTwo === 'style-2' && (
					<AlignmentControl
						label={__('Icon Alignment', 'advanced-icon-box')}
						value={iconTopBottom}
						onChange={(value) =>
							setAttributes({
								iconTopBottom: value,
							})
						}
						options={alignIconOptionTwo}
					/>
				)}
				{presetTwo === 'style-3' && (
					<AlignmentControl
						label={__('Icon Alignment', 'advanced-icon-box')}
						value={iconTopBottomR}
						onChange={(value) =>
							setAttributes({
								iconTopBottomR: value,
							})
						}
						options={alignIconOptionTwo}
					/>
				)}
				{presetTwo === 'style-4' && (
					<AlignmentControl
						label={__('Icon Alignment', 'advanced-icon-box')}
						value={alignIcon}
						onChange={(value) =>
							setAttributes({
								alignIcon: value,
							})
						}
						options={alignIconOption}
					/>
				)}
				<CardDivider />
				<ColorControl
					label={__('Background color', 'advanced-icon-box')}
					color={iconColor}
					colorName="iconColor"
					onChange={setAttributes}
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
					searchInputPlaceholder={__(
						'Link Here..',
						'advanced-icon-box'
					)}
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
					max={50}
					min={5}
				/>

				<RangeControl
					label={__('Button Radius', 'advanced-icon-box')}
					value={btnRadius}
					onChange={(btnValue) =>
						setAttributes({ btnRadius: btnValue })
					}
					min={2}
					max={100}
				/>
				<AlignmentControl
					label={__('Button Alignment', 'advanced-icon-box')}
					value={btnAlign}
					onChange={(value) =>
						setAttributes({
							btnAlign: value,
						})
					}
					options={alignIconOption}
				/>
				<CardDivider />
				<TabPanelControl
					normalComponents={
						<>
							<ColorControl
								label={__('Color', 'advanced-icon-box')}
								color={btnColor}
								colorName="btnColor"
								onChange={setAttributes}
							/>
							<ColorControl
								label={__(
									'Background color',
									'advanced-icon-box'
								)}
								color={btnBgColor}
								colorName="btnBgColor"
								onChange={setAttributes}
							/>
						</>
					}
					hoverComponents={
						<>
							<ColorControl
								label={__('Color', 'advanced-icon-box')}
								color={btnHoverColor}
								colorName="btnHoverColor"
								onChange={setAttributes}
							/>
							<ColorControl
								label={__(
									'Background Color',
									'advanced-icon-box'
								)}
								color={btnBgHovercolor}
								colorName="btnBgHovercolor"
								onChange={setAttributes}
							/>
						</>
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
