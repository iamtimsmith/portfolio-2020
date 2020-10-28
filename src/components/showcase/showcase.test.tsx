import React from 'react';
import {render} from '@testing-library/react';
import {Showcase} from 'components';

const fluidMock = {
	aspectRatio: 1,
	sizes: "(max-width: 600px) 100vw, 600px",
	src: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png",
	srcSet: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/6d161/timsmith-teal.png 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/630fb/timsmith-teal.png 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png 600w",
	srcSetWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/e7487/timsmith-teal.webp 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/403a4/timsmith-teal.webp 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp 600w",
	srcWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp"
};

const props = {
	image: fluidMock,
	title: {
		text: `Showcase section`,
		type: `h2`,
	},
	content: `This is the content`,
	link: {
		to: `/`,
		text: `Link`,
		title: true,
	},
	align: `left`,
	date: `11-09-2020`,
	tags: `#react #node`,
	button: false,
}

describe(`<Showcase />`, () => {
	it(`renders the showcase`, () => {
		const {debug, queryByTestId} = render(<Showcase {...props}/>);
		debug();
		const showcase = queryByTestId(`showcase`);
		expect(showcase).toBeInTheDocument();
	});
});
