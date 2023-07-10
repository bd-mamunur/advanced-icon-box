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
						<div className="bdt-item" id="bdt-item-box">
							<div className="bdt-icon-wrap bdt-icon-align">
								{icon ? (
									<div className="bdt-icon-bg bdt-svg">
										<DisplayIcon icon={icon} />
									</div>
								) : (
									<div className="bdt-icon-bg bdt-svg">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512"
										>
											<path d="M36 32.2C18.4 30.1 2.4 42.5 .2 60S10.5 93.6 28 95.8l7.9 1c16 2 28 15.6 28 31.8V160H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H64V384c0 53 43 96 96 96h32c106 0 192-86 192-192V256c0-53-43-96-96-96H272c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32 14.3 32 32v32c0 70.7-57.3 128-128 128H160c-17.7 0-32-14.3-32-32V224h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H128V128.5c0-48.4-36.1-89.3-84.1-95.3l-7.9-1z" />
										</svg>
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
