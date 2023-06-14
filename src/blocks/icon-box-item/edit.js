/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
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
	 ${titleColor ? `.${uniqueId} .bdt-title { color: ${titleColor}; }` : ''}
	  .${uniqueId} .bdt-title {
		 font-size: ${fontSizeDesk}px !important;
		 text-align: ${titleAlign};
		 text-transform: ${titleCase} !important;
	  }
	  
	 .${uniqueId} .bdt-title:hover {
		 color: ${titleHoverColor};
	  }
	 
	  .${uniqueId} .bdt-desc .bdt-desc-size{
		  color: ${descColor};
		  font-size: ${descFontSizeDesk}px;
		  text-align: ${descAlign};
		  text-transform: ${descCase}
	 
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
		 
 
	 .${uniqueId} .bdt-advanced-icon-box .bdt-icon-bg{
			 
			 text-align: ${iconAlign ? iconAlign : '0'} !important;
			 
			 }
	 .${uniqueId} .bdt-advanced-icon-box .bdt-svg svg{
			  border-radius : ${iconRadius.top ? iconRadius.top : '0'} ${
		iconRadius.right ? iconRadius.right : '0'
	}
	 ${iconRadius.bottom ? iconRadius.bottom : '0'} ${
		iconRadius.left ? iconRadius.left : '0'
	} !important;
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
		
		

	`;

	const tabStyles = `	.${uniqueId} .bdt-title {
		color: ${titleColor};
		font-size: ${fontSizeTab}px !important;
		text-align: ${titleAlign};
		text-transform: ${titleCase} !important;
	 }
	 
	 	.${uniqueId} .bdt-title:hover {
			color: ${titleHoverColor};
	  	 }
	
	 	.${uniqueId} .bdt-desc .bdt-desc-size {
		 color: ${descColor};
		 font-size: ${descFontSizeTab}px;
		 text-align: ${descAlign};
		 text-transform: ${descCase}
	
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
	 
	    .${uniqueId} .bdt-title:hover {
				color: ${titleHoverColor};
	      		}
	
		.${uniqueId} .bdt-desc .bdt-desc-size{
				color: ${descColor};
				font-size: ${descFontSizeMob}px;
				text-align: ${descAlign};
				text-transform: ${descCase}
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
