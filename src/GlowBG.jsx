import React from 'react';

const GlowBG = ({children, color}) => {
	return (
		<div className='w-screen overflow-hidden relative'>
			<div
				style={{backgroundColor: color}}
				className='z-0 w-[78rem] h-[64rem] rounded-full absolute -top-[32rem] left-[34%] opacity-85'></div>
			<div
				style={{backgroundColor: color}}
				className='z-0 w-[46rem] h-[52rem] rounded-full absolute -top-24 -left-60'></div>
			<div className='min-h-screen bg-gradient-to-b from-gray-900/40 to-gray-900 backdrop-blur-[8rem] z-10 pt-8'>
				{children}
			</div>
		</div>
	);
};

export default GlowBG;
