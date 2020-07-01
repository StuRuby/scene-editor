import React, { useState, CSSProperties } from 'react';
import reactCSS, { CSS } from 'reactcss';
import { SketchPicker, RGBColor, ColorResult } from 'react-color';

const defaultColor: RGBColor = { r: 241, g: 112, b: 19, a: 1 };

export function ColorPicker(props: Props) {
	const [display, setDisplay] = useState(false);
	const { color = defaultColor, setColor } = props;
	const styles = reactCSS({
		default: {
			color: {
				width: '36px',
				height: '14px',
				borderRadius: '2px',
				background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
			} as CSSProperties,
			swatch: {
				padding: '5px',
				background: '#fff',
				borderRadius: '1px',
				boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
				display: 'inline-block',
				cursor: 'pointer',
			} as CSSProperties,
			popover: {
				position: 'fixed',
				zIndex: 2,
			} as CSSProperties,
			cover: {
				position: 'fixed',
				top: '0px',
				right: '0px',
				bottom: '0px',
				left: '0px',
			} as CSSProperties,
		},
	});

	const handleClick = () => setDisplay(!display);
	const handleClose = () => setDisplay(false);
	const handleChange = (evt: ColorResult) => setColor(evt.rgb);

	return (
		<div>
			<div style={styles.swatch} onClick={handleClick}>
				<div style={styles.color} />
			</div>
			{display ? (
				<div style={styles.popover}>
					<div style={styles.cover} onClick={handleClick} />
					<SketchPicker color={color} onChange={handleChange} />
				</div>
			) : null}
		</div>
	);
}

interface Props {
	color?: RGBColor;
	setColor: (color: RGBColor) => void;
}
