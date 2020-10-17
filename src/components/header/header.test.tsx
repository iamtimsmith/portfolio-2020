import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from './header';

describe(`<Header />`, () => {
	it(`Shows the navbar`, () => {
		const {queryByRole} = render(<Header />);
		expect(queryByRole(`banner`)).toBeInTheDocument();
	});

	it(`Shows the logo`, () => {
		const {queryByRole} = render(<Header />);
		expect(queryByRole(`link`, {name: /tim smith/i})).toBeInTheDocument();
	});

	it(`Shows the menu`, () => {
		const {queryByRole} = render(<Header />);
		expect(queryByRole(`navigation`)).toBeInTheDocument();
	});

	it(`Shows the projects link`, () => {
		const {queryByRole} = render(<Header />);
		expect(queryByRole(`link`, {name: /projects/i})).toBeInTheDocument();
	});

	it(`Shows the blogs link`, () => {
		const {queryByRole} = render(<Header />);
		expect(queryByRole(`link`, {name: /blog/i})).toBeInTheDocument();
	});
});
