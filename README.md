# Intelligent Registration System with Selenium Automation

## Project Overview
The Intelligent Registration System is a web-based application designed to collect user information through a structured and validated registration form. The system focuses on providing a clean user interface, real-time client-side validations, password strength checking, and dynamic dropdown behavior for country, state, and city selection.

The project also includes automation testing using Selenium WebDriver to validate form behavior under different scenarios. Both negative and positive test cases are automated to ensure the reliability and correctness of the registration process.

---

## Key Features
- User-friendly registration form with mandatory field validation
- Client-side validation to prevent incorrect data submission
- Dynamic Country–State–City dropdown functionality
- Password strength indicator (Weak / Medium / Strong)
- Submit button disabled until all required fields are valid
- Inline error messages and clear success alerts
- Selenium automation for positive and negative scenarios
- Automatic screenshot capture during test execution

---

## Technologies Used
HTML5, CSS3, JavaScript, Java, Selenium WebDriver, Maven, JUnit, ChromeDriver

---

## Project Folder Structure
```txt
registration-automation/
├── index.html                     # Registration form UI
├── style.css                      # Styling and responsive layout of the form
├── script.js                      # Client-side validation, password strength logic,
│                                  # and dynamic Country–State–City dropdown handling
│
├── src/
│   ├── main/
│   │   └── java/                  # Application setup (if required)
│   │
│   └── test/
│       └── java/
│           └── com/
│               └── frugaltesting/
│                   └── tests/
│                       ├── RegistrationNegativeTest.java
│                       ├── RegistrationPositiveTest.java
│                       └── RegistrationValidationTest.java
│
├── pom.xml                        # Maven configuration for Selenium WebDriver,
│                                  # dependencies, and test execution
├── error-state.png                # Screenshot captured for negative test scenario
├── success-state.png              # Screenshot captured for positive test scenario
└── README.md                      # Project documentation


### Negative Scenario
- Mandatory field (Last Name) is skipped
- Error message is displayed
- Error fields are validated
- Screenshot captured as error-state.png

### Positive Scenario
- All required fields are filled with valid data
- Password and Confirm Password match
- Terms & Conditions checkbox is selected
- Successful submission is validated
- Screenshot captured as success-state.png

---

## How to Run the Project

### Web Application
1. Open index.html in a browser
2. Fill the registration form
3. Observe validation behavior and messages

## Selenium Automation
1. Open the project in Eclipse IDE
2. Update Maven dependencies
3. Run the Selenium test classes as JUnit Test
4. Screenshots will be saved automatically in the project directory

---

## Screenshots & Video
- Screenshots of both negative and positive automation scenarios are included
- Automation execution video is available through the Drive link shared in the submission PDF

---

## Author Details
Name: Priya  
Project Type: Academic Automation Assignment  
Role Applied: Software Engineer  
