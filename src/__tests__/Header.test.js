import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../redux/store"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should have a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={store} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const button = screen.getByRole("button", {name: "Login"});
    expect(button).toBeInTheDocument();
})

it("Login button must change into Logout when clicked, and back to Login when clicked again ", () => {
    render(
        <BrowserRouter>
            <Provider store={store} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    let loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);

    loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
})
