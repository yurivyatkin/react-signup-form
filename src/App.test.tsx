import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

const validEmail = "yuri@example.com";
const invalidEmail = "yuri@example";
const validPassword = "1Q!";
const invalidPasswordNoSpecial = "1Q";
const invalidPasswordNoNumeric = "Q!";
const invalidPasswordNoCapital = "1!";

const errorMessageInvalidEmail = "Please enter a valid email address";
const errorMessageInvalidPassword =
  "Must contain a capital letter, a digit, and a special character";
const errorMessagePasswordsDontMatch = "Passwords do not match";

const successMessage = "Thank you for signing up!";

beforeEach(() => {
  render(<App />);
});

describe("App", () => {
  it("has 'Sign Up' in the heading when loaded", () => {
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
  });

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

describe("Form's validation", () => {
  let userNameInput: HTMLElement;
  let createPasswordInput: HTMLElement;
  let confirmPasswordInput: HTMLElement;
  let signUpButton: HTMLElement;

  beforeEach(() => {
    userNameInput = screen.getByLabelText("Username");
    createPasswordInput = screen.getByLabelText("Create password");
    confirmPasswordInput = screen.getByLabelText("Confirm password");
    signUpButton = screen.getByRole("button", { name: "Sign Up" });
  });

  it("displays an error message when the username input is empty", async () => {
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidEmail)
    ).toBeInTheDocument();
  });

  it("displays an error message when the username input is not an email", async () => {
    await userEvent.type(userNameInput, invalidEmail);
    await userEvent.type(createPasswordInput, validPassword);
    await userEvent.type(confirmPasswordInput, validPassword);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidEmail)
    ).toBeInTheDocument();
  });

  it("displays an error message when the password input is empty", async () => {
    await userEvent.type(userNameInput, validEmail);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidPassword)
    ).toBeInTheDocument();
  });

  it("displays an error message when the password lacks a special symbol", async () => {
    await userEvent.type(userNameInput, validEmail);
    await userEvent.type(createPasswordInput, invalidPasswordNoSpecial);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidPassword)
    ).toBeInTheDocument();
  });

  it("displays an error message when the password lacks a numeric symbol", async () => {
    await userEvent.type(userNameInput, validEmail);
    await userEvent.type(createPasswordInput, invalidPasswordNoNumeric);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidPassword)
    ).toBeInTheDocument();
  });

  it("displays an error message when the password lacks a capital letter", async () => {
    await userEvent.type(userNameInput, validEmail);
    await userEvent.type(createPasswordInput, invalidPasswordNoCapital);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessageInvalidPassword)
    ).toBeInTheDocument();
  });

  it("displays an error message when the passwords do not match", async () => {
    await userEvent.type(userNameInput, validEmail);
    await userEvent.type(createPasswordInput, validPassword);
    await userEvent.type(confirmPasswordInput, invalidPasswordNoSpecial);
    await userEvent.click(signUpButton);
    expect(
      await screen.findByText(errorMessagePasswordsDontMatch)
    ).toBeInTheDocument();
  });
});

describe("Form's submission", () => {
  it("displays a success message when all the fields are valid", async () => {
    const userNameInput = screen.getByLabelText("Username");
    const createPasswordInput = screen.getByLabelText("Create password");
    const confirmPasswordInput = screen.getByLabelText("Confirm password");
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });
    await userEvent.type(userNameInput, validEmail);
    await userEvent.type(createPasswordInput, validPassword);
    await userEvent.type(confirmPasswordInput, validPassword);
    await userEvent.click(signUpButton);
    expect(await screen.findByText(successMessage)).toBeInTheDocument();
  });
});
