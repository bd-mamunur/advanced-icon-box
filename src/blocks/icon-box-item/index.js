import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// import attributes
import attributes from './attributes';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: 'welcome-view-site',
	},
	attributes,
	edit: Edit,
	save: Save,
});
