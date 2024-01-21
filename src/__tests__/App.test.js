import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    render(<App/>)
    const element = screen.getByRole("heading", {
        // name: /hi, i'm/i,
        // exact: false,
        level: 1
    })
    expect(element).toBeInTheDocument();
})

test("displays an image with alt text", () => {
    render(<App/>)
    const element = screen.getByRole("img")
    expect(element).toHaveAttribute("src");
})

test("displays a second-level heading with the text About Me", () => {
    render(<App/>)
    const element = screen.getByRole("heading", {
        name: "About Me",
        level: 2
    })
    expect(element).toBeInTheDocument()
})

// test("displays a paragraph for your biography", () => {
//     render(<App/>)
//     const element = screen.getByRole("paragraph")
//     expect(element).toBeInTheDocument()
// })

test("displays two links, one to your GitHub page, and one to your LinkedIn page", () => {
    render(<App/>)
    const elements = screen.getAllByRole("link")
    expect(elements[0]).toHaveAttribute("href")
    expect(elements[1]).toHaveAttribute("href")
})

// Your tests here
