import React from 'react';
/**
 * @jest-environment jsdom
 */
import {render, fireEvent} from '@testing-library/react';
import AddScorePage from '../components/AddScorePage';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDycBvY6bk6cYU-p5JnubAkxwcFO5sqdWA",
    authDomain: "popshap-scores-task.firebaseapp.com",
    projectId: "popshap-scores-task",
    storageBucket: "popshap-scores-task.appspot.com",
    messagingSenderId: "959279272473",
    appId: "1:959279272473:web:0cf99ea72716a2706f9088",
    measurementId: "G-CKCX37NKP7"
};

initializeApp(firebaseConfig)

const db = getFirestore();

//collection reference
const colRef = collection(db, "Names_Scores");

describe('testing AddScorePage', () => {
    let addScorePage;

    const props = { colRef,
    setFirstName: jest.fn(),
    setLastName: jest.fn(),
    setScore: jest.fn(),
    firstName: 'Aliya',
    lastName: 'Salmanova',
    score: '100'};

    beforeEach(() => {
        addScorePage = render(<AddScorePage {...props} />);
    });

    test('displays the correct input values', () => {
        expect(addScorePage.getByLabelText('First name').value).toBe('Aliya');
        expect(addScorePage.getByLabelText('Last name').value).toBe('Salmanova');
        expect(addScorePage.getByLabelText('Score').value).toBe('100');
    });

    test('displays the correct input values', () => {
        fireEvent.change(addScorePage.getByLabelText('First name'), {target: {value: 'John'}});
        expect(props.setFirstName).toHaveBeenCalledWith('John');

        fireEvent.change(addScorePage.getByLabelText('Last name'), {target: {value: 'Travolta'}});
        expect(props.setLastName).toHaveBeenCalledWith('Travolta');

        // fireEvent.change(addScorePage.getByLabelText('Score'), {target: {value: '95'}});
        // expect(props.setScore).toHaveBeenCalledWith('95');
    });
})