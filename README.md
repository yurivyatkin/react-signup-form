# React Sign-Up Form

## What Is This?

This simple single-page application uses React and other libraries to implement a sign-up form.
Currently, it is in the technical design phase, and there is no implementation yet.
As the work progresses, we will update this file.

## Functional Requirements.

The sign-up form must have three fields:
- **username**
  - must be a valid email address;
- **password**
  - must have at least one capital letter, one numeric character, and one
special character;
- **confirm password**
  - must be the same as the password field.

The user must complete all three fields to submit the form.

When the form is submitted, display a success message.

The markup should follow the Accessibility Standards.

## Non-Functional Requirements.

The code should be developed using the Test-Driven Development approach.

The code organisation should allow changes and adding new features without massive refactoring.

Ideally, the project should become a reusable sign-up/login form that exposes an `onSumbit` method and uses a theme provider from the context.

## Proposed Technical Solution.

### Visual Design

The application should follow the design decisions presented in this [Figma file](https://www.figma.com/file/TokLc2O1P2deU0aDetOhVJ/Sign-up-Form).

### Technical Stack

#### Vite

[Vite](https://vitejs.dev/) is a well-balanced set of frontend tools focusing on the best developer experience.

To generate a React application with TypeScript enabled in it, use the following command:
```sh
$ npm create vite@latest . -- --template react-ts
✔ Current directory is not empty. Please choose how to proceed: › Ignore files and continue
[...]
```

#### Jest

[Jest](https://jestjs.io/) is a JavaScript testing framework that we will use to enable [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) in this project.

#### Tailwind CSS

The hardest decision is to choose a styling approach.
Since we are planning to use [shadcn/ui](https://ui.shadcn.com/) (see the next session), [Tailwind CSS](https://tailwindcss.com/) is a natural choice.
Talwind CSS is a utility-first CSS framework with functional classes that can be composed to build any design directly in the markup.

#### shadcn/ui

We want our application to follow the accessibility standards as closely as possible from the outset but without investing too much time in implementing this requirement.

[shadcn/ui](https://ui.shadcn.com/) is an open-source collection of accessible and customisable components built on top of Radix UI using Tailwind CSS.

[Radix UI](https://www.radix-ui.com/) is an open-source component library optimized for fast development, easy maintenance, and accessibility.

#### React Hook Form

For building forms, **shadcn/ui** [recommends](https://ui.shadcn.com/docs/components/form) using [React-Hook-Form](https://react-hook-form.com/), which is one of the crucial reasons for choosing **shadcn/ui**, after all.

#### Zod
 
To ensure that fields in the form contain valid values, as described in the Functional Requirements above, we follow [shadcn/ui](https://ui.shadcn.com/docs/components/form) again and choose [Zod](https://zod.dev/) as a robust schema validation solution.
