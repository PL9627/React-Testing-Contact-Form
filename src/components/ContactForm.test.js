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
    const emailLabel = getByLabelText(/email/i);
    const mssgLabel = getByLabelText(/message/i);
});

test('input info will display', () => {
    const {getByLabelText, findByText} = render(<ContactForm />);

    const fnLabel = getByLabelText(/first name/i);
    const lnLabel = getByLabelText(/last name/i);
    const emailLabel = getByLabelText(/email/i);
    const mssgLabel = getByLabelText(/message/i);

    fireEvent.change(fnLabel, {target: {name: 'firstName', value: 'Paul'}});
    fireEvent.change(lnLabel , {target: {name: 'lastName', value: 'Lee'}});
    fireEvent.change(emailLabel , {target: {name: 'email', value: 'Paul@gmail.com'}});
    fireEvent.change(mssgLabel , {target: {name: 'message', value: 'hello'}});

    findByText('Paul');
    findByText('Lee');
    findByText('Paul@gmail.com');
    findByText('hello');
});

test('testing submit', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm />)

    const fnLabel = getByLabelText(/first name/i);
    const lnLabel = getByLabelText(/last name/i);
    const emailLabel = getByLabelText(/email/i);
    const mssgLabel = getByLabelText(/message/i);

    fireEvent.change(fnLabel, {target: {name: 'firstName', value: 'Paul'}});
    fireEvent.change(lnLabel , {target: {name: 'lastName', value: 'Lee'}});
    fireEvent.change(emailLabel , {target: {name: 'email', value: 'Paul@gmail.com'}});
    fireEvent.change(mssgLabel , {target: {name: 'message', value: 'hello'}});

    expect(fnLabel.value).toBe('Paul');
    expect(lnLabel.value).toBe('Lee');
    expect(emailLabel.value).toBe('Paul@gmail.com');
    expect(mssgLabel.value).toBe('hello');

    fireEvent.click(getByTestId(/btn/i));
})