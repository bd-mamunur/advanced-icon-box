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
		titleCase,
		titleColor,
		description,
		descColor,
		descAlign,
		descCase,
		bgColor,
		bgHoverColor,
		bgBorder,
		bgBorderColor,
		bgRadius,
		headingTag,
		contentTag,
		iconAlign,
		btnLabel,
		btnRadius,
		btnAlign,
		btnBgColor,
		btnColor,
		btnBorderColor,
		icon,
		iconRadius,
		iconTopBottom,
		iconTopBottomR,
		alignIcon,
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
			 .${uniqueId} .bdt-advanced-icon-box .bdt-icon-bg{
				text-align: ${iconAlign ? iconAlign : '0'} ;
				position: absolute;
				top: 0px;
				bottom: 0px;
				left: 0px;
				right: 0px;
				
		   }
	

			.${uniqueId} .bdt-body-content {
				margin-top: 65px;
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
			presetStyles = '';
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
		...(titleCase !== undefined &&
			titleCase !== '' && {
				'text-transform': titleCase,
			}),
	};
	//container border all device
	const bdtBorderDesk = {
		...(bgBorder !== undefined &&
			bgBorder !== '' && {
				border: `${bgBorder}px solid ${bgBorderColor}`,
			}),
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
		...(descCase !== undefined &&
			descCase !== '' && {
				'text-transform': descCase,
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
		...(titleCase !== undefined &&
			titleCase !== '' && {
				'text-transform': titleCase,
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
		...(descCase !== undefined &&
			descCase !== '' && {
				'text-transform': descCase,
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
		...(titleCase !== undefined &&
			titleCase !== '' && {
				'text-transform': titleCase,
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
		...(descCase !== undefined &&
			descCase !== '' && {
				'text-transform': descCase,
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
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg {${convertToCss(
						bdtIconStyleTab
				  )}}`
				: ' '
		}


	${
		Object.keys(bdtbuttonSapanTab).length > 0
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span {${convertToCss(
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
							<div className="bdt-icon-wrap">
								{icon && (
									<div className="bdt-icon-bg bdt-svg">
										<DisplayIcon icon={icon} />
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
