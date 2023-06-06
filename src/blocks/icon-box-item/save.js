import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		uniqueId,
		title,
		description,
		headingTag,
		contentTag,
		btnLabel,
		btnLinkObj,
		icons,
	} = attributes;
	return (
		<>
			<div
				{...useBlockProps.save({
					className: `${uniqueId}`,
				})}
			>
				<div className="bdt-container">
					<div className="bdt-advanced-icon-box bdt-avnaced-icon-box-style-1">
						<div className="bdt-item">
							<div className="bdt-icon-wrap">
								{icons && icons}
							</div>
							<div className="bdt-body-content">
								<div className="bdt-title">
									<RichText.Content
										tagName={headingTag}
										value={title}
									/>
								</div>
								<div className="bdt-desc">
									<RichText.Content
										tagName={contentTag}
										value={description}
									/>
								</div>
								{btnLinkObj && btnLinkObj.url && (
									<div className="bdt-link-btn">
										<a
											href={
												btnLinkObj &&
												btnLinkObj.url &&
												btnLinkObj.url
											}
											target={
												btnLinkObj &&
												btnLinkObj.openInNewTab &&
												'_blank'
											}
											rel={
												btnLinkObj &&
												btnLinkObj.openInNewTab
													? 'noopener noreferrer'
													: 'noopener'
											}
										>
											<RichText.Content
												value={btnLabel}
											/>
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
