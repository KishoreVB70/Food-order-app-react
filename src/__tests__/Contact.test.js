import Contact from "../components/Contact.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Is component rendered", () => {
    render(<Contact />);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
})

test("Does component have name field", () => {
    render(<Contact />);
    const field = screen.getByPlaceholderText("contact");
    expect(field).toBeInTheDocument();
})