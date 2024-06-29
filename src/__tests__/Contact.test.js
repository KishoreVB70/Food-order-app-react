import Contact from "../components/Contact.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Component should render", () => {
    render(<Contact />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
})

test("Component should have name field", () => {
    render(<Contact />);
    const field = screen.getByPlaceholderText("contact");
    expect(field).toBeInTheDocument();
})


test("Should have three textboxes", () => {
    render(<Contact />);
    const field = screen.getAllByRole("textbox")
    expect(field.length).toBe(3);
})