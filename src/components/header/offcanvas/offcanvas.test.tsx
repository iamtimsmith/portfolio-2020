import React from 'react';
import {render} from '@testing-library/react';
import {Offcanvas} from './offcanvas';

describe(`<Offcanvas />`, () => {
	it(`renders`, () => {
		const {queryByRole} = render(<Offcanvas />);
		const offcanvas = queryByRole(`complementary`);
		expect(offcanvas).toBeInTheDocument();
	});
});
