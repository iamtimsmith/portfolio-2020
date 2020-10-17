import React from 'react';
import {render} from '@testing-library/react';
import {Footer} from './footer';

describe(`<Footer />`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<Footer />);
		expect(queryByRole(`contentinfo`)).toBeInTheDocument();
	});

	it(`renders the text`, () => {
		const {queryByText} = render(<Footer />);
		expect(queryByText(/by tim smith/i)).toBeInTheDocument();
	});

	it(`renders the heart`, () => {
		const {queryByTestId} = render(<Footer />);
		const heart = queryByTestId(`heart`);
		expect(heart).toBeInTheDocument();
	});
});
