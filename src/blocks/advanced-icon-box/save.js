import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { uniqueId } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId}`,
			})}
		>
			<div className="aib-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
