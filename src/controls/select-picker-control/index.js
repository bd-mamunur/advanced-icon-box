import { Button } from '@wordpress/components';
import './style.scss';
<style></style>;
const IconPickerControl = ({ label, icon, onchange, className, variant }) => {
	return (
		<div className="aib-containter">
			<div className="aib-label">{label}</div>

			{icon &&
				icon.map((item, i) => (
					<Button
						onClick={() => onchange(item.value)}
						className={className}
						key={i}
						variant={variant}
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
	);
};

export default IconPickerControl;
