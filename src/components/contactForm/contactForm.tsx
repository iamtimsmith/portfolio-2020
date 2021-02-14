import React from 'react';
import {Field, Button} from './contactForm.style';

export const ContactForm = () => {
	return (
		<form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
			<input type="hidden" name="form-name" value="contact" />
			<Field>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' />
			</Field>
			<Field>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' id='email' />
			</Field>
			<Field>
				<label htmlFor='message'>Message</label>
				<textarea name="message" id="message"></textarea>
			</Field>
			<Button>Submit</Button>
		</form>
	);
}
