import React from 'react';
import {render} from '@testing-library/react';
import {Social} from './social';

describe(`<Social />`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<Social />);
		expect(queryByRole(`navigation`)).toBeInTheDocument();
	});

	it(`renders  twitter link`, () => {
		const {queryByRole} = render(<Social />);
		const link = queryByRole(`link`, {name: /twitter/i});
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`twitter.com`));
	});

	it(`renders  linkedin link`, () => {
		const {queryByRole} = render(<Social />);
		const link = queryByRole(`link`, {name: /linkedin/i});
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`linkedin.com`));
	});

	it(`renders github link`, () => {
		const {queryByRole} = render(<Social />);
		const link = queryByRole(`link`, {name: /github/i});
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`github.com`));
	});

	it(`renders dev link`, () => {
		const {queryByRole} = render(<Social />);
		const link = queryByRole(`link`, {name: /dev/i});
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`dev.to`));
	});

	it(`renders an email link`, () => {
		const {queryByRole} = render(<Social />);
		const link = queryByRole(`link`, {name: /email/i});
		expect(link).toHaveAttribute(`href`, expect.stringContaining(`mailto`));
	});
});
