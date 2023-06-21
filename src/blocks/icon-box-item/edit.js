/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
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

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		preset,
		iconRadius,
		title,
		titleAlign,
		titleCase,
		titleColor,
		titleHoverColor,
		description,
		descColor,
		descAlign,
		descCase,
		descHoverColor,
		bgColor,
		bgHoverColor,
		headingTag,
		contentTag,
		iconAlign,
		btnLabel,
		btnRadius,
		btnAlign,
		btnBgColor,
		btnColor,
		btnBgHovercolor,
		btnHoverColor,
		icon,
		iconTopBottom,
		iconTopBottomR,
		alignIcon,
		iconColor,
		iconHoverColor,
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
	const {
		[`${ICON_SIZE}DeskRange`]: iconSizeDesk,
		[`${ICON_SIZE}TabRange`]: iconSizeTab,
		[`${ICON_SIZE}MobRange`]: iconSizeMob,
	} = attributes;
	/**
	 * Presets Based Styles
	 */
	let presetStyles;
	switch (preset) {
		case 'style-1':
			presetStyles = `
			.${uniqueId} .bdt-advanced-icon-box .bdt-icon-bg{
				text-align: ${iconAlign ? iconAlign : '0'} !important;
				position: absolute;
				top: 0px;
				bottom: -10px;
				left: 0px;
				right: -10px;
				
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
				'font-size': fontSizeDesk + 'px',
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

	const deskStyles = `
	  
	${
		Object.keys(bdtTitleStyles).length > 0
			? `.${uniqueId} .bdt-title {${convertToCss(bdtTitleStyles)}}`
			: ' '
	}
    ${
		titleHoverColor
			? `.${uniqueId} .bdt-title:hover {
		color: ${titleHoverColor};
	 }`
			: ''
	}
	 
	 
	  .${uniqueId} .bdt-desc .bdt-desc-size{
		  color: ${descColor};
		  font-size: ${descFontSizeDesk}px;
		  text-align: ${descAlign};
		  text-transform: ${descCase}
	 
	  }
	  ${
			descHoverColor
				? `.${uniqueId} .bdt-desc #desc-hov:hover {
				color: ${descHoverColor} !important;
		}`
				: ''
		}
	 
	${
		preset === 'style-4' && alignIcon
			? `.${uniqueId} .bdt-icon-wrap {
			text-align:${alignIcon};
	}`
			: ''
	}	 
    ${
		bgColor
			? `.${uniqueId} .bdt-item  {
		background: ${bgColor};
			 
	}`
			: ''
	}
	
	 
	${
		bgHoverColor
			? `.${uniqueId} .bdt-item:hover  {
		background: ${bgHoverColor};
   }`
			: ''
	}	
	${
		iconHoverColor
			? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg:hover {
		background:${iconHoverColor};
  	}`
			: ''
	}
		
	.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg{
				 border-radius : ${iconRadius.top ? iconRadius.top : '0'} ${
		iconRadius.right ? iconRadius.right : '0'
	}
			${iconRadius.bottom ? iconRadius.bottom : '0'} ${
		iconRadius.left ? iconRadius.left : '0'
	} !important;
			 width:${iconSizeDesk}px;
			 height:${iconSizeDesk}px;
		  	 background:${iconColor} ;
	}
	

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
	 
	 .${uniqueId} #btn-link {
		 text-align : ${btnAlign}
	 }
     
	${presetStyles}

	`;

	const tabStyles = `	
	.${uniqueId} .bdt-title {
		color: ${titleColor};
		font-size: ${fontSizeTab}px !important;
		text-align: ${titleAlign};
		text-transform: ${titleCase} !important;
	 }
	 
	 ${
			titleHoverColor
				? `.${uniqueId} .bdt-title:hover {
		color: ${titleHoverColor};
	 }`
				: ''
		}
	
	 	.${uniqueId} .bdt-desc .bdt-desc-size {
		 color: ${descColor};
		 font-size: ${descFontSizeTab}px;
		 text-align: ${descAlign};
		 text-transform: ${descCase}
	
	    }
		${
			descHoverColor
				? `.${uniqueId} .bdt-desc #desc-hov:hover {
				color: ${descHoverColor} !important;
		}`
				: ''
		}
		${
			preset === 'style-4' && alignIcon
				? `.${uniqueId} .bdt-icon-wrap {
				text-align:${alignIcon};
		}`
				: ''
		}
		${
			bgColor
				? `.${uniqueId} .bdt-item  {
			background: ${bgColor};
				 
		}`
				: ''
		}
		${
			bgHoverColor
				? `.${uniqueId} .bdt-item:hover  {
			background: ${bgHoverColor};
	   }`
				: ''
		}
		
		${
			iconHoverColor
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg:hover {
			background:${iconHoverColor};
		  }`
				: ''
		}
		.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg{
			border-radius : ${iconRadius.top ? iconRadius.top : '0'} ${
		iconRadius.right ? iconRadius.right : '0'
	}
	   ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
		iconRadius.left ? iconRadius.left : '0'
	} !important;
		width:${iconSizeTab}px;
		height:${iconSizeTab}px;
		background:${iconColor} ;
}

		
	    .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span{
				color: ${btnColor};
				background-color: ${btnBgColor};
				font-size: ${btnFontSizeTab}px;
				border-radius: ${btnRadius}px;
		
			 }
		
			.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a{
				color: ${btnColor};
				 background-color: ${btnBgColor};
				 font-size: ${btnFontSizeTab}px;
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
	
			.${uniqueId} #btn-link {
				text-align : ${btnAlign}
			}

		`;

	const mobStyles = `	.${uniqueId} .bdt-title {
			color: ${titleColor};
			font-size: ${fontSizeMob}px !important;
			text-align: ${titleAlign};
			text-transform: ${titleCase} !important;
		}
	 
		${
			titleHoverColor
				? `.${uniqueId} .bdt-title:hover {
		color: ${titleHoverColor};
	 }`
				: ''
		}
	
		.${uniqueId} .bdt-desc .bdt-desc-size{
				color: ${descColor};
				font-size: ${descFontSizeMob}px;
				text-align: ${descAlign};
				text-transform: ${descCase}
			 }
			 ${
					descHoverColor
						? `.${uniqueId} .bdt-desc #desc-hov:hover {
					color: ${descHoverColor} !important;
			}`
						: ''
				}
			${
				preset === 'style-4' && alignIcon
					? `.${uniqueId} .bdt-icon-wrap {
						text-align:${alignIcon};
				}`
					: ''
			}			
			${
				bgColor
					? `.${uniqueId} .bdt-item  {
				background: ${bgColor};
					 
			}`
					: ''
			}
			
		.${uniqueId} .bdt-item:hover  {
				background: ${bgHoverColor};
		}
		${
			iconHoverColor
				? `.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg:hover {
			background:${iconHoverColor};
		  }`
				: ''
		}
		.${uniqueId} .bdt-advanced-icon-box .bdt-svg svg{
			border-radius : ${iconRadius.top ? iconRadius.top : '0'} ${
		iconRadius.right ? iconRadius.right : '0'
	}
	   ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
		iconRadius.left ? iconRadius.left : '0'
	} !important;
		width:${iconSizeMob}px;
		height:${iconSizeMob}px;
		 background:${iconColor} ;
}


		.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span{
				color: ${btnColor};
			    background-color: ${btnBgColor};
				font-size: ${btnFontSizeMob}px;
				border-radius: ${btnRadius}px;
		}
		
		.${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a{
				 color: ${btnColor};
				 background-color: ${btnBgColor};
				 font-size: ${btnFontSizeMob}px;
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
	
		.${uniqueId} #btn-link {
				text-align : ${btnAlign}
			}
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
	console.log(alignIcon);
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
