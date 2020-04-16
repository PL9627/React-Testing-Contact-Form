import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without crashing', () => {
    render(<ContactForm />);
});

test('labels will display', () => {
    const {getByLabelText} = render(<ContactForm />);

    const fnLabel = getByLabelText(/first name/i);
    const lnLabel = getByLabelText(/last name/i);
})