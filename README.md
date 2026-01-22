# Registration Automation Project

## Project Overview
This project is an Intelligent Registration System developed using HTML, CSS, and JavaScript with Selenium automation testing. The main objective of this project is to validate a user registration form using client-side validations and automate both negative and positive test scenarios.

The project demonstrates form validation logic, dynamic dropdown behavior, and automation testing using Selenium WebDriver with screenshot capture.

---

## Project Folder Structure

registration-automation/
│
├── index.html        → Registration form UI
├── style.css         → Styling and layout of the form
├── script.js         → Client-side validation and dynamic logic
├── registration-automation/
│   └── Selenium automation test files (Positive & Negative scenarios)
├── pom.xml           → Maven configuration for Selenium automation
└── README.md         → Project documentation

---

## Technologies Used
- HTML5  
- CSS3  
- JavaScript  
- Selenium WebDriver  
- Java  
- Maven  
- Eclipse IDE  
- Chrome Browser  

---

## Features Implemented
- Mandatory field validations
- Submit button disabled until required fields are valid
- Email validation (blocks disposable domains like tempmail)
- Password strength indicator (Weak / Medium / Strong)
- Dynamic Country → State → City dropdowns
- Clear error and success messages
- Screenshot capture during automation execution

---

## Automation Testing Details

Automation is implemented using Selenium WebDriver with Maven.

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

### Selenium Automation
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
