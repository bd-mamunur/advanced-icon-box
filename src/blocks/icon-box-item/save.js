import { useBlockProps, RichText } from '@wordpress/block-editor';
import { DisplayIcon } from '../../controls';
export default function save({ attributes }) {
	const {
		uniqueId,
		title,
		description,
		headingTag,
		contentTag,
		btnLabel,
		btnLinkObj,
		icon,
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
								{icon && (
									<div className="bdt-icon-bg bdt-svg">
										<DisplayIcon icon={icon} />
									</div>
								)}
							</div>
							<div className="bdt-body-content">
								<RichText.Content
									className="bdt-title"
									tagName={headingTag}
									value={title}
								/>
								<div className="bdt-desc">
									<RichText.Content
										className="bdt-desc-size desc-hover"
										tagName={contentTag}
										value={description}
									/>
								</div>
								{btnLinkObj && btnLinkObj.url && (
									<div className="bdt-link-btn" id="btn-link">
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
