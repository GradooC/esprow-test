module.exports = {
	content: ['./src/**/*.{tsx,ts}'],
	theme: {
		extend: {
			animation: {
				'make-visible': 'make-visible 1s',
			},
			keyframes: {
				'make-visible': {
					from: {
						visibility: 'hidden',
					},
					to: {
						visibility: 'visible',
					},
				},
			},
		},
	},
	plugins: [],
};
