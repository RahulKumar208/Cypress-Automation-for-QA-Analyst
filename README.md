# QA Automation Testing for Signup Dropdown

## Overview
This repository contains automated tests for verifying the "Country" dropdown on the sign-up page of Circula. Specifically, the test ensures that "Sweden" is available as an option in the dropdown list.

## Technologies Used
- **Cypress**: JavaScript-based end-to-end testing framework
- **XPath Support for Cypress**: Enables use of XPath selectors in Cypress

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** (Comes with Node.js)

## Installation Steps

1. **Clone the repository**
   ```sh
   git clone <your-repository-url>
   cd <your-repository-folder>
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the Cypress test**
   ```sh
   npx cypress open
   ```
   OR run headless mode:
   ```sh
   npx cypress run
   ```

## Dependencies
This project requires the following npm packages:
```json
{
  "dependencies": {
    "cypress": "^12.0.0",
    "cypress-xpath": "^2.0.0"
  }
}
```

## Test Scenario
### **Signup Dropdown Test**
The script navigates to the Circula sign-up page and verifies that "Sweden" is an available option in the country dropdown.

### **Test Steps:**
1. Handle **uncaught exceptions** (CAPTCHA-related errors are ignored).
2. Visit the **Circula Sign-Up Page**.
3. Handle **Cookie Consent** pop-up.
4. Enter **email and password**.
5. Click on **Try for free** button.
6. Fill out **Contact Details** (First name, Last name, Phone number) and proceed.
7. Enter **Company Information** and ensure the country dropdown contains **Sweden**.

## File Structure
```
|-- cypress/
|   |-- integration/
|   |   |-- signup_dropdown_test.spec.js
|-- package.json
|-- README.md
```

## Notes
- The test **waits for elements** to become interactable before proceeding.
- The script uses **XPath selectors** for better element identification.
- The **CAPTCHA handling** mechanism prevents failures caused by automated testing restrictions.



