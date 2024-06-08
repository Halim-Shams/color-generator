import React, {useEffect, useState} from 'react';
import Values from 'values.js';
import Form from './Form';
import Color from './Color';
import GlowBG from './GlowBG';

const ColorGenerator = () => {
	const [color, setColor] = useState('#eab308');
	const [colors, setColors] = useState(new Values(color).all(10));

	const generateColors = (hexCode) => {
		setColors(new Values(hexCode).all(10));
	};

	return (
		<GlowBG color={color}>
			<div className='flex flex-col gap-16 px-20 pt-24'>
				<Form
					setColor={setColor}
					color={color}
					generateColors={generateColors}
				/>
				<div className='grid grid-cols-8 gap-x-4 gap-y-8'>
					{colors.map((color) => {
						return (
							<Color
								hex={color.hexString()}
								percentage={color.weight}
								type={color.type}
							/>
						);
					})}
				</div>
			</div>
		</GlowBG>
	);
};

export default ColorGenerator;
