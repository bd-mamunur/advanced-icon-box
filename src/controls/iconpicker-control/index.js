/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import {
	BaseControl,
	Flex,
	FlexBlock,
	FlexItem,
	Button,
	Popover,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

// import icons
import Icons from '../../helper/icons';

// import style.scss
import './style.scss';

const IconPickerControl = ({ label, instanceId, onChange, value }) => {
	const [iconsPanel, setIconsPanel] = useState(false);
	const [Search, setSearch] = useState('');

	return (
		<div className="bdt-icon-picker">
			<Flex>
				<FlexBlock>
					<BaseControl
						id={`bdt-icon-picker-${instanceId}`}
						label={label}
					/>
				</FlexBlock>
				<FlexItem>
					<Button icon="edit" onClick={() => setIconsPanel(true)} />
				</FlexItem>
			</Flex>
			{iconsPanel && (
				<Popover
					position="bottom left"
					className="bdt-icon-picker-popover"
					onClose={() => setIconsPanel(false)}
					onFocusOutside={() => setIconsPanel(false)}
					offsetY={5}
				>
					<div className="bdt-icon-picker-panel">
						<div className="search-field">
							<input
								type="search"
								onChange={(e) => setSearch(e.target.value)}
								placeholder={__(
									'Search Icon',
									'advanced-icon-box'
								)}
							/>
						</div>
						<div className="icons-list">
							{Icons && Search
								? Object.keys(Icons)
										.filter((icon) => icon.includes(Search))
										.map((icon, i) => {
											return (
												<Button
													className={`icon-btn ${
														icon === value
															? 'active'
															: ''
													}`}
													key={i}
													onClick={() =>
														onChange(icon)
													}
												>
													{Icons[icon]}
												</Button>
											);
										})
								: Object.keys(Icons).map((icon, i) => {
										return (
											<Button
												className={`icon-btn ${
													icon === value
														? 'active'
														: ''
												}`}
												key={i}
												onClick={() => onChange(icon)}
											>
												{Icons[icon]}
											</Button>
										);
								  })}
						</div>
					</div>
				</Popover>
			)}
		</div>
	);
};

export default withInstanceId(IconPickerControl);
