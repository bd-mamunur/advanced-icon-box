import { Button } from '@wordpress/components';
import './style.scss';
const IconPickerControl = ({ label, icon, onHandle, className, variant }) => {
	// const { attributes, setAttributes } = objAttrs;
	// const { icons } = attributes;

	return (
		<div className="aib-containter">
			<div className="aib-label">{label}</div>

			{icon &&
				icon.map((item, i) => (
					<Button
						onClick={() => onHandle(item.value)}
						className={className}
						key={i}
						variant={variant}
					>
						<span
							role="img"
							aria-label="sheep"
							className="iconValue"
						>
							{item.value}
						</span>
					</Button>
				))}
		</div>
	);
};

export default IconPickerControl;
