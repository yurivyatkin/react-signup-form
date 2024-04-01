import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  render(<App />);
})

describe("App", () => {
  it("has 'Sign-Up' in the heading when loaded", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Sign Up");
  });

  it("has a form when loaded", () => {
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});

describe("Form", () => {
  let form: HTMLElement;

  beforeEach(() => {
    form = screen.getByRole("form");
  })

  it("has a 'Username' input", () => {
    const usernameInput = screen.getByLabelText("Username");

    expect(usernameInput).toBeInTheDocument();
    expect(form.contains(usernameInput)).toBeTruthy();
  });

  it("has a 'Create password' input", () => {
    const usernameInput = screen.getByLabelText("Create password");

    expect(usernameInput).toBeInTheDocument();
    expect(form.contains(usernameInput)).toBeTruthy();
  });

  it("has a 'Confirm password' input", () => {
    const usernameInput = screen.getByLabelText("Confirm password");

    expect(usernameInput).toBeInTheDocument();
    expect(form.contains(usernameInput)).toBeTruthy();
  });

  it("has a 'Sign Up' button", () => {
    const button = screen.getByRole("button", { name: "Sign Up" });

    expect(button).toBeInTheDocument();
    expect(form.contains(button)).toBeTruthy();
  });
});
