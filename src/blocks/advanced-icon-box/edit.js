/* eslint-disable no-console */

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
const { GRID_COLUMNS, COLUMNS_GAP } = Constants;

import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { uniqueId, blockStyle } = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const {
		[`${GRID_COLUMNS}DeskRange`]: columnDesk,
		[`${GRID_COLUMNS}TabRange`]: columnTab,
		[`${GRID_COLUMNS}MobRange`]: columnMob,
	} = attributes;
	const {
		[`${COLUMNS_GAP}DeskRange`]: columnsGapDesk,
		[`${COLUMNS_GAP}TabRange`]: columnsGapTab,
		[`${COLUMNS_GAP}MobRange`]: columnsGapMob,
		[`${COLUMNS_GAP}Unit`]: unit,
	} = attributes;

	const deskStyles = `
		.${uniqueId} .block-editor-block-list__layout{
			grid-template-columns: repeat(${columnDesk}, 1fr);
			gap: ${columnsGapDesk}${unit};
		}
	
		.${uniqueId} .aib-content {
			grid-template-columns: repeat(${columnDesk},1fr);
			gap: ${columnsGapDesk}${unit};
		}
		
	`;
	const tabStyles = `	
	.${uniqueId} .block-editor-block-list__layout {
		grid-template-columns: repeat(${columnTab}, 1fr);
		gap: ${columnsGapTab}${unit};
	}
	.${uniqueId} .aib-content {
		grid-template-columns: repeat(${columnTab},1fr);
		gap: ${columnsGapTab}${unit};
	}
`;
	const mobStyles = `
		.${uniqueId} .block-editor-block-list__layout{
			grid-template-columns: repeat(${columnMob}, 1fr);
			gap: ${columnsGapMob}${unit};
		}
		.${uniqueId} .aib-content {
			grid-template-columns: repeat(${columnMob},1fr);
			gap: ${columnsGapMob}${unit};
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
				<InnerBlocks
					allowedBlocks={['bdt/icon-box-item']}
					template={[
						['bdt/icon-box-item'],
						['bdt/icon-box-item'],
						['bdt/icon-box-item'],
					]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
					orientation="horizontal"
				/>
			</div>
		</Fragment>
	);
}
