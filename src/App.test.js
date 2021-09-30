import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test("renders without errors", () => {
    render(<App/>);
});

test("on mount, new animal header renders", () => {
    //Arrange: render our App
    render(<App/>);

    //Act: find our header element
    
    // const headerEl = screen.queryByTestId("header");

    //getBy: if an element does not exist, the test fails
    // const headerEl = screen.getByText("Add Old Animal");

    //findBy: returns an element after a promise is completed
    // const headerEl = screen.findByText("Add New Animal");

    // const headerEls = screen.queryAllByText("Add New Animal");
    // console.log(headerEls);

    //queryBy: if an element does not exist, returns a null value
    const headerEl = screen.queryByText(/add new animal/i);
    
    //Assert: pass the test if our header element exists

    // expect(headerEls.length === 3).toBeTruthy();
    // expect(headerEls.length).toBe(3);
    // expect(headerEls).toHaveLength(3);

    expect(headerEl).toBeTruthy();
    expect(headerEl).toHaveTextContent(/add new animal/i);
    expect(headerEl).toBeInTheDocument();
});
