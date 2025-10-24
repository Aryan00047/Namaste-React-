import { render, screen } from '@testing-library/react';
import Grocery from "../components/Grocery";
import "@testing-library/jest-dom";

test("should load grocery component", () => {
    render(<Grocery/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should load buttons in grocery component", () => {
    render(<Grocery/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const saveBtn = screen.getByText("submit");
    expect(saveBtn).toBeInTheDocument();

    const saveButton = screen.getAllByRole("button");
    expect(saveButton[1]).toBeInTheDocument();
});

test("should load input name in grocery component ", () => {
    render(<Grocery/>);

    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();
})

test("should load two inputs in grocery component ", () => {
    render(<Grocery/>);

    const inputBoxes = screen.getAllByRole("textbox");
    // expect(inputBoxes.length).toBe(2); //either expect individual or if there are arrays the length or check position
    expect(inputBoxes.length).not.toBe(1);
})