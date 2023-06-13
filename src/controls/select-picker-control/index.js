import { Button } from '@wordpress/components';
import './style.scss';
const IconPickerControl = ({ label, icon, onchange, className, value }) => {
	return (
		<div className="aib-containter">
			<div className="aib-label">{label}</div>
			<div className="aib-icon-wrap">
				{icon &&
					icon.map((item, i) => (
						<Button
							onClick={() => onchange(item.value)}
							className={className}
							key={i}
							variant={
								value === item.value ? 'primary' : 'secondary'
							}
							icon={item.name}
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
		</div>
	);
};

export default IconPickerControl;
