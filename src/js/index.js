/* eslint-disable no-undef */
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const postcode = document.getElementById('zip');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const successMessage = document.getElementById('success-message');

    function showError(input, message) {
        const errorElement = document.getElementById(`${input.id}-error`);
        errorElement.textContent = message;
        errorElement.style.visibility = 'visible';
    }

    function hideError(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        errorElement.textContent = '';
        errorElement.style.visibility = 'hidden';
    }

    function validateEmail() {
        if (email.validity.valueMissing) {
            showError(email, 'Email is required.');
        } else if (email.validity.typeMismatch) {
            showError(email, 'Please enter a valid email address.');
        } else {
            hideError(email);
        }
    }

    function validateCountry() {
        if (country.validity.valueMissing) {
            showError(country, 'Country is required.');
        } else {
            hideError(country);
        }
    }

    function validatePostcode() {
        if (postcode.validity.valueMissing) {
            showError(postcode, 'Post code is required.');
        } else if (postcode.validity.patternMismatch) {
            showError(postcode, 'Please enter a valid 4 digit post code.');
        } else {
            hideError(postcode);
        }
    }

    function validatePassword() {
        if (password.validity.valueMissing) {
            showError(password, 'Password is required.');
        } else {
            hideError(password);
        }
    }

    function validatePasswordConfirm() {
        if (passwordConfirm.validity.valueMissing) {
            showError(passwordConfirm, 'Password confirmation is required.');
        } else if (passwordConfirm.value !== password.value) {
            showError(passwordConfirm, 'Passwords do not match.');
        } else {
            hideError(passwordConfirm);
        }
    }

    email.addEventListener('input', validateEmail);
    country.addEventListener('input', validateCountry);
    zip.addEventListener('input', validateZip);
    password.addEventListener('input', validatePassword);
    passwordConfirm.addEventListener('input', validatePasswordConfirm);

    form.addEventListener('submit', (event) => {
        validateEmail();
        validateCountry();
        validatePostcode();
        validatePassword();
        validatePasswordConfirm();

        if (!form.checkValidity()) {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        successMessage.textContent = 'High five! Form submitted successfully.';
        successMessage.style.display = 'block';
    });
});
