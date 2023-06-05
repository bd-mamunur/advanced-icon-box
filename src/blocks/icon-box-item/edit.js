/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import {} from '@wordpress/components';
const { Fragment, useEffect } = wp.element;
import * as Constants from './constants';
const { GRID_COLUMNS } = Constants;

//generator
import { generateResRangleControlAttributes } from '../../generators';
// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		titleHoverColor,
		description,
		descColor,
		headingTag,
		contentTag,
		btnLabel,
		alignment,
		btnBgColor,
		btnColor,
		btnBgHovercolor,
		btnHoverColor,
		icons,
		// btnLinkObj,
		gridLine,
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);
	const {
		deskRange: gridDesktop,
		tabRange: gridTab,
		mobRange: gridmob,
	} = generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: 3,
	});

	const deskStyles = `
	${uniqueId} .bdt-advanced-container, .block-editor-block-list__layout,.wp-block-bdt-advanced-icon-box .bdt-container  {
			grid-template-columns: repeat(${gridLine}, 1fr);
			column-gap: 2px;
			
			
		}
	
	 	.${uniqueId} .bdt-title {
			color: ${titleColor};
		 }
		 
		 .${uniqueId} .bdt-title:hover {
			color: ${titleHoverColor};
		 }
		
	 	.${uniqueId} .bdt-desc {
			 color: ${descColor};
		
		 }
			.${uniqueId} .bdt-icon-wrap {
			 text-align: ${alignment};
		
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item:hover .bdt-link-btn span{
			color: ${btnHoverColor};
	 		background-color: ${btnBgHovercolor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item:hover .bdt-link-btn a{
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
	console.log(deskStyles);
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
								{icons && (
									<span role="img" aria-label="sheep">
										{icons}
									</span>
								)}
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
											'text-domain'
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
