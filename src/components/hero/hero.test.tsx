import React from 'react';
import {render} from '@testing-library/react';
import {Hero} from './hero';

const image = {
	aspectRatio: 1,
	sizes: "(max-width: 600px) 100vw, 600px",
	src: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png",
	srcSet: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/6d161/timsmith-teal.png 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/630fb/timsmith-teal.png 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/2a4de/timsmith-teal.png 600w",
	srcSetWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/e7487/timsmith-teal.webp 150w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/403a4/timsmith-teal.webp 300w,↵/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp 600w",
	srcWebp: "/static/72ff0d7dbdfcf24e07653da2bc30fc1c/ad85c/timsmith-teal.webp"
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
