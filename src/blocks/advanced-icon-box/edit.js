/* eslint-disable no-console */
// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;

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

		titleColor,

		descriptionColor,
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const deskStyles = `
		.${uniqueId} .bdt-title {
			color: ${titleColor};
		}
		.${uniqueId} .bdt-description {
			color: ${descriptionColor};
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
				<div className="bdt-advanced-container">
					<InnerBlocks
						allowedBlocks={['bdt/icon-box-item']}
						renderAppender={InnerBlocks.ButtonBlockAppender}
						orientation="horizontal"
					/>
				</div>
			</div>
		</Fragment>
	);
}
