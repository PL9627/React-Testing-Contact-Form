import React from 'react';
import {render, fireEvent, findAllByTestId} from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm without crashing', () => {
    render(<ContactForm />)
});

