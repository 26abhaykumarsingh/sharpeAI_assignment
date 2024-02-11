# React.js Assignment

## Overview

This project is a React.js web application developed to demonstrate proficiency in various frontend technologies and practices. The goal was to create a seamless web application with three main pages - Home, Transaction, and Data - showcasing capabilities in React Router, form input validation, error handling, and clean, readable code.

## Technologies Used

- **React.js:** Used as the primary frontend library for building the application.
- **React Router:** Implemented React Router for seamless navigation between different pages.
- **Tailwind CSS:** Utilized Tailwind for styling and UI components, incorporating components from Tailwind UI and Tailwind Components.
- **Firebase Firestore:** Employed Google Firestore for data storage and retrieval.
- **React Hook Form:** Integrated the React Hook Form library for efficient and effective form validation.

## Template Libraries

Tailwind CSS was chosen as the primary template library for designing the pages. The project leverages the rich set of components and utilities offered by Tailwind CSS, avoiding the need to create the screen design from scratch.

## Assignment Details

### 1. React Router Navigation

- Designed a web application with three pages - Home, Transaction, and Data.
- Implemented seamless navigation between pages using React Router.
- Created a visually appealing navbar to enhance user navigation.

### 2. Transaction Page (Form Input Validation)

- Developed a Transaction page with a form requesting the user's wallet address and amount.
- Implemented validation checks:
  - Wallet Address: Ensured it is not empty and follows the standard Ethereum address format.
  - Amount: Validated that the entered value is a number and within the specified range (0 - 10,000).
- Submitted data is stored in Google Firestore database.

### 3. Data Page

- Implemented a Data page to fetch and display data from the Google Firestore database stored during the Transaction page.

### 4. Error Handling

- Provided clear and user-friendly error messages for form validations.
- Examples include messages for empty wallet address fields and incorrect values entered.

### 5. Code Proficiency and Readability

- Ensured clean, concise, and easily readable code.
- Avoided corner cases that could break the application.

## Submission

The code is available in the [GitHub repository] https://github.com/26abhaykumarsingh/sharpeAI_assignment and deployed on [Vercel]https://sharpe-ai-assignment-pink.vercel.app/.

## Instructions for Installation and Running

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Execute `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Unique and Creative Approaches

1. Tailwind UI Component Integration:

   - Leveraged Tailwind UI components to enhance the visual aesthetics and functionality of the application.
   - Demonstrated creativity by carefully selecting and customizing Tailwind UI components to create a cohesive and visually appealing user interface.

2. Seamless Form Validation with React Hook Form:

   - Utilized React Hook Form for efficient and effective form validation.
   - Created a streamlined and user-friendly form submission process by implementing real-time validation checks for the wallet address and amount fields.

3. Dynamic Error Handling:

   - Innovatively handled form validation errors by providing clear and dynamic error messages for users.
   - Ensured a user-friendly experience by guiding users with specific error messages based on the validation criteria, enhancing overall usability.
