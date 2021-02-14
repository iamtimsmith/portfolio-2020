import styled from 'styled-components';
import {IAlert} from './contactForm.i';

export const Alert = styled.p<IAlert>`
	color: ${(props) =>
		props.status === 'success' ? `var(--teal-500)` :
		props.status === 'error' ? 'red' :
		'black'}
`;

export const Field = styled.div`
	margin-top: 20px;

	label {
		font-size: 1.6rem;
		display: block;
		line-height: 1.2;
	}
	input {
		width: 100%;
		font-size: 2.2rem;
		padding: 10px;
		border-radius: 0;
		border: 1px solid var(--grey-200);
	}
	textarea {
		width: 100%;
		font-family: var(--sans-serif);
		font-size: 2.2rem;
		padding: 10px;
		border-radius: 0;
		border: 1px solid var(--grey-200);
		height: 200px;
		resize: none;
	}
`;

export const Button = styled.button`
	padding: 15px 25px;
	font-size: 2.2rem;
	font-weight: 700;
	text-transform: uppercase;
	border-radius: 0;
	border: 2px solid var(--grey-900);
	background: transparent;
	transition: all 0.3s;
	cursor: pointer;

	&:hover {
		background: var(--grey-900);
		color: var(--grey-0);
	}
`;
