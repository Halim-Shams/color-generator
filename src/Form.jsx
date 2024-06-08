import React from 'react';

const Form = ({setColor, color, generateColors}) => {
	const hundleSubmit = (e) => {
		e.preventDefault();
		setColor(color);
		generateColors(color);
	};

	return (
		<div className='flex gap-6 items-center'>
			<p className='text-3xl text-slate-800 font-semibold'>Color Generator</p>
			<form onSubmit={hundleSubmit} className='flex'>
				<input
					value={color}
					onChange={(e) => setColor(e.target.value)}
					className='w-10 h-8 border-y border-l rounded-l border-slate-200 p-0.5'
					type='color'
					id='color'
				/>
				<input
					value={color}
					onChange={(e) => setColor(e.target.value)}
					type='text'
					className='bg-white border-y text-lg px-4 text-slate-400 font-light outline-none'
				/>
				<button
					style={{backgroundColor: color}}
					type='submit'
					className={`border-y border-r hover:bg-white hover:border-y hover:border-r hover:text-slate-800 transition-all rounded-r text-white px-2`}>
					Generate
				</button>
			</form>
		</div>
	);
};

export default Form;
