/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import {} from '@wordpress/components';
const { Fragment, useEffect } = wp.element;
import * as Constants from './constants';
const { TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE } = Constants;

//generator

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import { DisplayIcon } from '../../controls';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		titleHoverColor,
		description,
		descColor,
		descHoverColor,
		bgColor,
		bgHoverColor,
		headingTag,
		contentTag,
		btnLabel,
		btnRadius,
		alignment,
		btnBgColor,
		btnColor,
		btnBgHovercolor,
		btnHoverColor,
		icons,
		// btnLinkObj,
		gridLine,
		icon,
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const {
		[`${TITLE_FONTSIZE}DeskRange`]: fontSizeDesk,
		[`${TITLE_FONTSIZE}TabRange`]: fontSizeTab,
		[`${TITLE_FONTSIZE}MobRange`]: fontSizeMob,
	} = attributes;
	const {
		[`${DESCRIPTION_FONTSIZE}DeskRange`]: descFontSizeDesk,
		[`${DESCRIPTION_FONTSIZE}TabRange`]: descFontSizeTab,
		[`${DESCRIPTION_FONTSIZE}MobRange`]: descFontSizeMob,
	} = attributes;

	const {
		[`${BUTTON_FONTSIZE}DeskRange`]: btnFontSizeDesk,
		[`${BUTTON_FONTSIZE}TabRange`]: btnFontSizeTab,
		[`${BUTTON_FONTSIZE}MobRange`]: btnFontSizeMob,
	} = attributes;

	const deskStyles = `
	 	.${uniqueId} .bdt-title {
			color: ${titleColor};
			font-size: ${fontSizeDesk}px !important;
		 }
		 
		 .${uniqueId} .bdt-title:hover {
			color: ${titleHoverColor};
		 }
		
	 	.${uniqueId} .bdt-desc {
			 color: ${descColor};
			 font-size: ${descFontSizeDesk}px;
		
		 }
		 .${uniqueId} .bdt-desc:hover {
			color: ${descHoverColor};
			}
			.${uniqueId} .bdt-item  {
				background: ${bgColor};
			}
			.${uniqueId} .bdt-item:hover  {
				background: ${bgHoverColor};
		}
			.${uniqueId} .bdt-icon-wrap {
			 text-align: ${alignment};}

			

		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
			font-size: ${btnFontSizeDesk}px;
			border-radius: ${btnRadius}px;
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
			 font-size: ${btnFontSizeDesk}px;
			 border-radius: ${btnRadius}px;
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span:hover{
			color: ${btnHoverColor};
	 		background-color: ${btnBgHovercolor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a:hover {
			color: ${btnHoverColor};
	 		background-color: ${btnBgHovercolor};
		 }
		}


	`;
	const tabStyles = ``;
	const mobStyles = ``;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);
	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
				<div className="bdt-container">
					<div className="bdt-advanced-icon-box bdt-avnaced-icon-box-style-1">
						<div className="bdt-item">
							<div className="bdt-icon-wrap">
								<DisplayIcon icon={icon} />
							</div>
							<div className="bdt-body-content">
								<div className="bdt-title">
									<RichText
										tagName={headingTag}
										value={title}
										placeholder="Title"
										onChange={(v) =>
											setAttributes({ title: v })
										}
									/>
								</div>
								<div className="bdt-desc">
									<RichText
										tagName={contentTag}
										value={description}
										placeholder="Description Here"
										onChange={(v) =>
											setAttributes({ description: v })
										}
									/>
								</div>
								<div className="bdt-link-btn">
									<RichText
										className="button"
										tagName="span"
										value={btnLabel}
										onChange={(value) =>
											setAttributes({ btnLabel: value })
										}
										placeholder={__(
											'Button Label',
											'advanced-icon-box'
										)}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
