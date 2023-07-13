/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
const { Fragment, useEffect } = wp.element;

import * as Constants from './constants';
const { TITLE_FONTSIZE, DESCRIPTION_FONTSIZE, BUTTON_FONTSIZE, ICON_SIZE } =
	Constants;

//generator

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import { DisplayIcon } from '../../controls';

// function to convert object to css
const convertToCss = (obj) => {
	let cssResult;
	Object.keys(obj).reduce((cssString, key) => {
		// change key to css property
		const cssProperty = key.replace(
			/[A-Z]/g,
			(match) => `-${match.toLowerCase()}`
		);
		cssResult = `${cssString}${cssProperty}:${obj[key]};`;
		return cssResult;
	}, '');
	return cssResult;
};

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		uniqueId,
		blockStyle,
		presetTwo,
		title,
		titleAlign,
		titleColor,
		description,
		descColor,
		descAlign,
		bgColor,
		bgHoverColor,
		bgBorder,
		bgBorderStyle,
		bgBorderColor,
		bgRadius,
		headingTag,
		contentTag,
		iconAlign,
		btnLabel,
		btnRadius,
		btnAlign,
		btnBgColor,
		btnBorder,
		btnColor,
		btnBorderColor,
		icon,
		iconRadius,
		iconTopBottom,
		iconTopBottomR,
		alignIcon,
		iColor,
		iconColor,
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const { 'bdt/preset': preset } = context;
	useEffect(() => {
		setAttributes({ presetTwo: preset });
	}, [preset]);

	const {
		[`${TITLE_FONTSIZE}DeskRange`]: fontSizeDesk,
		[`${TITLE_FONTSIZE}TabRange`]: fontSizeTab,
		[`${TITLE_FONTSIZE}MobRange`]: fontSizeMob,
		[`${TITLE_FONTSIZE}Unit`]: titleUnit,
	} = attributes;
	const {
		[`${DESCRIPTION_FONTSIZE}DeskRange`]: descFontSizeDesk,
		[`${DESCRIPTION_FONTSIZE}TabRange`]: descFontSizeTab,
		[`${DESCRIPTION_FONTSIZE}MobRange`]: descFontSizeMob,
		[`${DESCRIPTION_FONTSIZE}Unit`]: dscUnit,
	} = attributes;

	const {
		[`${BUTTON_FONTSIZE}DeskRange`]: btnFontSizeDesk,
		[`${BUTTON_FONTSIZE}TabRange`]: btnFontSizeTab,
		[`${BUTTON_FONTSIZE}MobRange`]: btnFontSizeMob,
		[`${BUTTON_FONTSIZE}Unit`]: btnUnit,
	} = attributes;
	const {
		[`${ICON_SIZE}DeskRange`]: iconSizeDesk,
		[`${ICON_SIZE}TabRange`]: iconSizeTab,
		[`${ICON_SIZE}MobRange`]: iconSizeMob,
		[`${ICON_SIZE}Unit`]: iconUnit,
	} = attributes;

	/**
	 * Presets Based Styles
	 */

	let presetStyles;
	switch (preset) {
		case 'style-1':
			presetStyles = `
			 .${uniqueId} .bdt-icon-align {
				text-align: ${iconAlign};
				margin-left:-10px;
				margin-right:-10px;
				margin-top:-10px;
		   }
			`;
			break;
		case 'style-2':
			presetStyles = `

			.${uniqueId} #bdt-item-box{
				display: flex;
				padding: 7px 10px;
				align-items:${iconTopBottom};
			}
			.${uniqueId} .bdt-advanced-icon-box .bdt-icon-bg{
				margin-right:10px;
			}

			`;
			break;
		case 'style-3':
			presetStyles = `
			.${uniqueId} #bdt-item-box{
				display: flex;
				padding:10px 7px;
				flex-direction: row-reverse;
				align-items:${iconTopBottomR}
			}
			.${uniqueId} .bdt-advanced-icon-box .bdt-icon-bg{
				margin-left:10px;
			}
			`;
			break;
		case 'style-4':
			break;
		default:
			'';
	}

	const bdtTitleStyles = {
		...(fontSizeDesk !== undefined &&
			fontSizeDesk !== '' && {
				'font-size': fontSizeDesk + titleUnit,
			}),
		...(titleAlign !== undefined &&
			titleAlign !== '' && {
				'text-align': titleAlign,
			}),
		...(titleColor !== undefined &&
			titleColor !== '' && {
				color: titleColor,
			}),
	};
	//container border all device
	const bdtBorderDesk = {
		...(bgBorder !== undefined &&
			bgBorder !== '' && {
				borderWidth: `${bgBorder}px`,
			}),

		...(bgBorderStyle !== undefined &&
			bgBorderStyle !== '' && {
				borderStyle: `${bgBorderStyle}`,
			}),

		...(bgBorderColor !== undefined &&
			bgBorderColor !== '' && { borderColor: `${bgBorderColor}` }),
		...(bgRadius !== undefined &&
			bgRadius !== '' && {
				borderRadius: bgRadius + 'px',
			}),
		...(bgColor !== undefined &&
			bgColor !== '' && {
				backgroundColor: bgColor,
			}),
	};

	const bdtIconStyleDesk = {
		...(iconRadius !== undefined &&
			iconRadius !== '' && {
				borderRadius: `${iconRadius.top ? iconRadius.top : '0'} ${
					iconRadius.right ? iconRadius.right : '0'
				} ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
					iconRadius.left ? iconRadius.left : '0'
				}`,
			}),
		...(iconSizeDesk !== undefined &&
			iconSizeDesk !== '' && {
				width: iconSizeDesk + iconUnit,
			}),
		...(iconSizeDesk !== undefined &&
			iconSizeDesk !== '' && {
				height: iconSizeDesk + iconUnit,
			}),
		...(iColor !== undefined &&
			iColor !== '' && {
				fill: iColor,
			}),
		...(iconColor !== undefined &&
			iconColor !== '' && {
				backgroundColor: iconColor,
			}),
	};
	const bdtDscStyleDesk = {
		...(descColor !== undefined &&
			descColor !== '' && {
				color: descColor,
			}),
		...(descFontSizeDesk !== undefined &&
			descFontSizeDesk !== '' && {
				'font-size': descFontSizeDesk + dscUnit,
			}),
		...(descAlign !== undefined &&
			descAlign !== '' && {
				'text-align': descAlign,
			}),
	};
	const bdtbuttonSapanDesk = {
		...(btnColor !== undefined &&
			btnColor !== '' && {
				color: btnColor,
			}),
		...(btnBgColor !== undefined &&
			btnBgColor !== '' && {
				backgroundColor: btnBgColor,
			}),
		...(btnFontSizeDesk !== undefined &&
			btnFontSizeDesk !== '' && {
				fontSize: btnFontSizeDesk + btnUnit,
			}),
		...(btnRadius !== undefined &&
			btnRadius !== '' && {
				borderRadius: btnRadius + 'px',
			}),
		...(btnBorder !== undefined &&
			btnBorder !== '' && {
				border: `${btnBorder}px solid`,
			}),
		...(btnBorderColor !== undefined &&
			btnBorderColor !== '' && {
				borderColor: btnBorderColor,
			}),
	};

	//tab title style
	const bdtTitleStyleTab = {
		...(fontSizeTab !== undefined &&
			fontSizeTab !== '' && {
				'font-size': fontSizeTab + titleUnit,
			}),
		...(titleAlign !== undefined &&
			titleAlign !== '' && {
				'text-align': titleAlign,
			}),
		...(titleColor !== undefined &&
			titleColor !== '' && {
				color: titleColor,
			}),
	};
	// icon tab style
	const bdtIconStyleTab = {
		...(iconRadius !== undefined &&
			iconRadius !== '' && {
				borderRadius: `${iconRadius.top ? iconRadius.top : '0'} ${
					iconRadius.right ? iconRadius.right : '0'
				} ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
					iconRadius.left ? iconRadius.left : '0'
				}`,
			}),
		...(iconSizeTab !== undefined &&
			iconSizeTab !== '' && {
				width: iconSizeTab + iconUnit,
			}),
		...(iconSizeTab !== undefined &&
			iconSizeTab !== '' && {
				height: iconSizeTab + iconUnit,
			}),
		...(iColor !== undefined &&
			iColor !== '' && {
				fill: iColor,
			}),
		...(iconColor !== undefined &&
			iconColor !== '' && {
				backgroundColor: iconColor,
			}),
	};
	const bdtDscStyleTab = {
		...(descColor !== undefined &&
			descColor !== '' && {
				color: descColor,
			}),
		...(descFontSizeTab !== undefined &&
			descFontSizeTab !== '' && {
				'font-size': descFontSizeTab + dscUnit,
			}),
		...(descAlign !== undefined &&
			descAlign !== '' && {
				'text-align': descAlign,
			}),
	};

	const bdtbuttonSapanTab = {
		...(btnColor !== undefined &&
			btnColor !== '' && {
				color: btnColor,
			}),
		...(btnBgColor !== undefined &&
			btnBgColor !== '' && {
				backgroundColor: btnBgColor,
			}),
		...(btnFontSizeTab !== undefined &&
			btnFontSizeTab !== '' && {
				fontSize: btnFontSizeTab + btnUnit,
			}),
		...(btnRadius !== undefined &&
			btnRadius !== '' && {
				borderRadius: btnRadius + 'px',
			}),
		...(btnBorderColor !== undefined &&
			btnBorderColor !== '' && {
				borderColor: btnBorderColor,
			}),
	};

	// mobile title style
	const bdtTitleStyleMob = {
		...(fontSizeMob !== undefined &&
			fontSizeMob !== '' && {
				'font-size': fontSizeMob + titleUnit,
			}),
		...(titleAlign !== undefined &&
			titleAlign !== '' && {
				'text-align': titleAlign,
			}),
		...(titleColor !== undefined &&
			titleColor !== '' && {
				color: titleColor,
			}),
	};

	// icon tab style
	const bdtIconStyleMob = {
		...(iconRadius !== undefined &&
			iconRadius !== '' && {
				borderRadius: `${iconRadius.top ? iconRadius.top : '0'} ${
					iconRadius.right ? iconRadius.right : '0'
				} ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
					iconRadius.left ? iconRadius.left : '0'
				}`,
			}),
		...(iconSizeMob !== undefined &&
			iconSizeMob !== '' && {
				width: iconSizeMob + iconUnit,
			}),
		...(iconSizeMob !== undefined &&
			iconSizeMob !== '' && {
				height: iconSizeMob + iconUnit,
			}),
		...(iColor !== undefined &&
			iColor !== '' && {
				fill: iColor,
			}),
		...(iconColor !== undefined &&
			iconColor !== '' && {
				backgroundColor: iconColor,
			}),
	};

	const bdtDscStyleMob = {
		...(descColor !== undefined &&
			descColor !== '' && {
				color: descColor,
			}),
		...(descFontSizeMob !== undefined &&
			descFontSizeMob !== '' && {
				'font-size': descFontSizeMob + dscUnit,
			}),
		...(descAlign !== undefined &&
			descAlign !== '' && {
				'text-align': descAlign,
			}),
	};

	const bdtbuttonSapanMob = {
		...(btnColor !== undefined &&
			btnColor !== '' && {
				color: btnColor,
			}),
		...(btnBgColor !== undefined &&
			btnBgColor !== '' && {
				backgroundColor: btnBgColor,
			}),
		...(btnFontSizeMob !== undefined &&
			btnFontSizeMob !== '' && {
				fontSize: btnFontSizeMob + btnUnit,
			}),
		...(btnRadius !== undefined &&
			btnRadius !== '' && {
				borderRadius: btnRadius + 'px',
			}),
		...(btnBorderColor !== undefined &&
			btnBorderColor !== '' && {
				borderColor: btnBorderColor,
			}),
	};

	const deskStyles = `
	  
	${
		Object.keys(bdtTitleStyles).length > 0
			? `.${uniqueId} .bdt-title {${convertToCss(bdtTitleStyles)}}`
			: ' '
	}
 
	${
		Object.keys(bdtDscStyleDesk).length > 0
			? `.${uniqueId} .bdt-desc .bdt-desc-size {${convertToCss(
					bdtDscStyleDesk
			  )}}`
			: ' '
	}
	
	
	 
	${
		presetTwo === 'style-4' && alignIcon
			? `.${uniqueId} .bdt-icon-wrap {
			text-align:${alignIcon};
	}`
			: ''
	}	

	 
	${
		Object.keys(bdtBorderDesk).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item {${convertToCss(
					bdtBorderDesk
			  )}}`
			: ' '
	}


	 
	${
		bgHoverColor
			? `.${uniqueId} .bdt-item:hover  {
		background: ${bgHoverColor};
   }`
			: ''
	}	

		
	${
		Object.keys(bdtIconStyleDesk).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg {${convertToCss(
					bdtIconStyleDesk
			  )}}`
			: ' '
	}
	
    ${
		Object.keys(bdtbuttonSapanDesk).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span {${convertToCss(
					bdtbuttonSapanDesk
			  )}}`
			: ' '
	}

	${
		Object.keys(bdtbuttonSapanDesk).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a {${convertToCss(
					bdtbuttonSapanDesk
			  )}}`
			: ' '
	}
	

	.${uniqueId} #btn-link {
		text-align : ${btnAlign};
	}
     
	${presetStyles}

	`;

	const tabStyles = `	
	${
		Object.keys(bdtTitleStyles).length > 0
			? `.${uniqueId} .bdt-title {${convertToCss(bdtTitleStyleTab)}}`
			: ' '
	}
	 
	 
	${
		Object.keys(bdtDscStyleTab).length > 0
			? `.${uniqueId} .bdt-desc .bdt-desc-size {${convertToCss(
					bdtDscStyleTab
			  )}}`
			: ' '
	}
	

		${
			presetTwo === 'style-4' && alignIcon
				? `.${uniqueId} .bdt-icon-wrap {
				text-align:${alignIcon};
		}`
				: ''
		}

		${
			Object.keys(bdtBorderDesk).length > 0
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-item {${convertToCss(
						bdtBorderDesk
				  )}}`
				: ' '
		}

		${
			bgHoverColor
				? `.${uniqueId} .bdt-item:hover  {
			background: ${bgHoverColor};
	   }`
				: ''
		}
		
	

		${
			Object.keys(bdtIconStyleTab).length > 0
				? `.${uniqueId}  .bdt-advanced-icon-box .bdt-svg svg {${convertToCss(
						bdtIconStyleTab
				  )}}`
				: ' '
		}


	${
		Object.keys(bdtbuttonSapanTab).length > 0
			? `.${uniqueId} .bdt-item .bdt-link-btn span {${convertToCss(
					bdtbuttonSapanTab
			  )}}`
			: ' '
	}

	${
		Object.keys(bdtIconStyleTab).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg {${convertToCss(
					bdtIconStyleTab
			  )}}`
			: ' '
	}

	${
		Object.keys(bdtbuttonSapanTab).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a {${convertToCss(
					bdtbuttonSapanTab
			  )}}`
			: ' '
	}


	.${uniqueId} #btn-link {
		text-align : ${btnAlign}
	}

	${presetStyles}

	`;

	const mobStyles = `
	${
		Object.keys(bdtTitleStyleMob).length > 0
			? `.${uniqueId} .bdt-title {${convertToCss(bdtTitleStyleMob)}}`
			: ' '
	}	
	 


		${
			Object.keys(bdtDscStyleMob).length > 0
				? `.${uniqueId} .bdt-desc .bdt-desc-size {${convertToCss(
						bdtDscStyleMob
				  )}}`
				: ' '
		}
	
	
		${
			presetTwo === 'style-4' && alignIcon
				? `.${uniqueId} .bdt-icon-wrap {
						text-align:${alignIcon};
				}`
				: ''
		}

		${
			Object.keys(bdtBorderDesk).length > 0
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-item {${convertToCss(
						bdtBorderDesk
				  )}}`
				: ' '
		}
			
		.${uniqueId} .bdt-item:hover  {
				background: ${bgHoverColor};
		}
	

		${
			Object.keys(bdtIconStyleMob).length > 0
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg {${convertToCss(
						bdtIconStyleMob
				  )}}`
				: ' '
		}


	${
		Object.keys(bdtbuttonSapanMob).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span {${convertToCss(
					bdtbuttonSapanMob
			  )}}`
			: ' '
	}

	${
		Object.keys(bdtbuttonSapanMob).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a {${convertToCss(
					bdtbuttonSapanMob
			  )}}`
			: ' '
	}

	.${uniqueId} #btn-link {
		text-align : ${btnAlign}
	}

	${presetStyles}
		
	`;

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
						<div className="bdt-item" id="bdt-item-box">
							<div className="bdt-icon-wrap bdt-icon-align">
								{icon ? (
									<div className="bdt-icon-bg bdt-svg">
										<DisplayIcon icon={icon} />
									</div>
								) : (
									<div className="bdt-icon-bg bdt-svg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512"
										>
											<path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
										</svg>
									</div>
								)}
							</div>
							<div className="bdt-body-content">
								<RichText
									className="bdt-title"
									tagName={headingTag}
									value={title}
									placeholder={__(
										'Title',
										'advanced-icon-box'
									)}
									onChange={(v) =>
										setAttributes({ title: v })
									}
								/>
								<div className="bdt-desc">
									<RichText
										className="bdt-desc-size"
										id="desc-hov"
										tagName={contentTag}
										value={description}
										placeholder={__(
											'Description',
											'advanced-icon-box'
										)}
										onChange={(v) =>
											setAttributes({
												description: v,
											})
										}
									/>
								</div>
								<div className="bdt-link-btn" id="btn-link">
									<RichText
										className="button"
										tagName="span"
										value={btnLabel}
										onChange={(value) =>
											setAttributes({
												btnLabel: value,
											})
										}
										placeholder={__(
											'Label',
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
