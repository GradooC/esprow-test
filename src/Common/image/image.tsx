import React, { useState } from 'react';
import { ReactComponent as AvatarIcon } from 'Icons/avatar.svg';

type ImageProps = {
	src: string;
	alt: string;
};

enum States {
	IMAGE = 'image',
	FALLBACK = 'fallback',
}

export function Image({ src, alt }: ImageProps) {
	const [state, setState] = useState(States.IMAGE);

	const stateMap = {
		[States.FALLBACK]: <AvatarIcon fill="#94a3b8" className="mt-4" />,
		[States.IMAGE]: (
			<img
				loading="lazy"
				alt={alt}
				src={src}
				onError={() => setState(States.FALLBACK)}
			/>
		),
	};

	return (
		<div className="w-24 h-24 rounded-full shrink-0 mr-4 overflow-hidden bg-sky-200">
			{stateMap[state]}
		</div>
	);
}
