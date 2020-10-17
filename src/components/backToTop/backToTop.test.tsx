import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {BackToTop} from './backToTop';

const scrollto = jest.fn();
global.scrollTo = scrollto;

describe(`<BackToTop />`, () => {
	it(`scrolls when clicked`, () => {
		const {getByRole} = render(<BackToTop />);
		const button = getByRole(`button`, {name: /back to top/i});
		fireEvent.click(button);
		expect(window.scrollTo).toHaveBeenCalled();
	});
});
