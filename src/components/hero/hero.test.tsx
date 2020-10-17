import React from 'react';
import {render} from '@testing-library/react';
import {Hero} from './hero';

const image = {
	height: 600,
	src: `/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png`,
	srcSet: `/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png 1x`,
	srcSetWebp: `/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp 1x`,
	srcWebp: `/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp`,
	width: 600
};

describe(`<Hero />`, () => {
	it(`renders the hero`, () => {
		const {queryByRole} = render(<Hero title='Hello' content='world' image={image} />);
		const hero = queryByRole(`region`, {name: /hero section/i});
		expect(hero).toBeInTheDocument();
	});

	it(`renders the title`, () => {
		const {queryByRole} = render(<Hero title='Hello' content='world' image={image} />);
		const title = queryByRole(`heading`, {name: /hello/i});
		expect(title).toBeInTheDocument();
	});

	it(`renders the content`, () => {
		const {queryByText} = render(<Hero title='Hello' content='world' image={image} />);
		const content = queryByText(/world/i);
		expect(content).toBeInTheDocument();
	});

	it(`renders the image`, () => {
		const {queryByRole} = render(<Hero title='Hello' content='world' image={image} />);
		const img = queryByRole(`img`, {name: /hello/i});
		expect(img).toBeInTheDocument();
	});
});
