import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("Renders without errors", ()=> {
    render(<AnimalForm/>);
});

test("Displays Species if all inputs are filled and submitted", async () => {
    //Arrange: 
    //  Render our Component
    render(<AnimalForm/>);

    //Act: Fill out and submit our form
    //  1. Focus on species input.
    const speciesInput = screen.getByLabelText(/species:/i);
    
    //  2. Type in a species.
    userEvent.type(speciesInput, "feline");

    //  3. Focus on age input.
    const ageInput = screen.getByLabelText(/age:/i);
    //  4. Type in age.
    userEvent.type(ageInput, "33");

    //  5. Focus on notes input.
    const notesInput = screen.getByLabelText(/notes:/i);
    //  6. Type in notes.
    userEvent.type(notesInput, "nice coat.");

    //  8. Select the button.
    const button = screen.getByRole("button");
    //  9. Click on the button
    userEvent.click(button);

    //Assert:
    //  Find species text on page and verify that it exists.
    
    // Sync Way
    // const speciesFeedback = screen.queryByText(/feline/i);
    // expect(speciesFeedback).toBeInTheDocument();


    // Promises Way
    // const speciesFeedbackPromise = screen.findByText(/feline/i);
    // speciesFeedbackPromise.then(speciesFeedback => {
    //     expect(speciesFeedback).toBeInTheDocument();
    // });

    // Async / Await
    // const speciesFeedback = await screen.findByText(/feline/i);
    // expect(speciesFeedback).toBeInTheDocument();

    await waitFor(()=> {
        const speciesFeedback = screen.queryByText(/feline/i);
        expect(speciesFeedback).toBeInTheDocument();
    });
});