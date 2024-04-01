![Deploy](https://github.com/yurivyatkin/react-signup-form/actions/workflows/deploy.yml/badge.svg)

# A Sign-Up Form Exercise

This exercise showcases the use of React + TypeScript + Tailwind CSS to build single-page applications following a Test-Driven Development approach.

## Requirements

The application has a form with three fields:
- "username", must be a valid email address;
- "password", must contain a capital letter, a numeric symbol, and a special number;
- "confirm password", must match the value of the password field.

The form has a button with the text "Sign In".

The form can be submitted if all the fields are valid.

Upon successful submission, a success message is displayed.

## Technical Solution

The technical solution chosen for implementing the requirements is explained in [this Wiki page](https://github.com/yurivyatkin/react-signup-form/wiki/Technical-Stack).

## How to run locally

Clone the repository:
```sh
git clone git@github.com:yurivyatkin/react-signup-form.git
```

Install the dependencies
```sh
npm install
```

Run the development server:
```sh
npm run dev
```

Open the local copy at [http://localhost:5173/]( http://localhost:5173/).

## How to test

Run the test runner:
```sh
npm test
```

## How to develop components in isolation

Run Storybook:
```sh
npm run storybook
```

## See the deployed application

Open the link: [Sign-Up Form](https://yurivyatkin.github.io/react-signup-form/).
