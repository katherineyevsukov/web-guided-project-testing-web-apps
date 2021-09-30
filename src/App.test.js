import React from 'react';
import { render, screen } from "@testing-library/react"
import App from './App'

test("Test 1 when tested", () => {
    render (<App/>)
})

test("on mount, new animal renders", () => {
    //Arrange: render our App
    render(<App/>);

    //Act: find our header element
    //queryBy: if an element does not exist, retun a null value
    const headerEl = screen.queryByText("Add New Animal")
    
    //Assert: pass the test if our header element exists
    expect(headerEl).toBeInTheDocument()
})