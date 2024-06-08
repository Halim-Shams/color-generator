import React, {useEffect, useState} from 'react';

const Color = ({hex, percentage, type}) => {
	const [copySuccess, setCopySuccess] = useState('Copy');

	const copyToClipboard = async (data) => {
		try {
			await navigator.clipboard.writeText(data);
			setCopySuccess('Coppied!');
		} catch (error) {
			setCopySuccess('Copy');
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopySuccess('Copy');
		}, 2000);

		return () => clearTimeout(timeout);
	}, [copySuccess]);

	return (
		<div
			style={{backgroundColor: hex}}
			className='rounded w-full pt-4 pl-3 pb-10 hover:cursor-pointer relative overflow-hidden'>
			<p className={`${type === 'tint' ? 'text-slate-900' : 'text-white'}`}>
				{percentage}%
			</p>
			<p
				className={`${
					type === 'tint' ? 'text-slate-900' : 'text-white'
				} font-light`}>
				{hex}
			</p>
			<div
				onClick={() => copyToClipboard(hex)}
				className='hover:bg-slate-900/60 hover:backdrop-blur-[1.8px] transition-all absolute inset-0 group'>
				<div className='absolute right-4 bottom-6 translate-y-[180%] group-hover:translate-y-0 transition-transform delay-150'>
					<p className='flex items-center gap-2'>
						<span
							className={`${
								type === 'tint' ? 'text-slate-900' : 'text-white'
							} text-lg font-mono`}>
							{copySuccess}
						</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={`w-6 h-6 ${
								type === 'tint' ? 'text-slate-900' : 'text-white'
							}`}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184'
							/>
						</svg>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Color;
