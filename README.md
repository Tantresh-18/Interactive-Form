# Multi-Step Registration Form

An interactive wizard-based registration form ("0(T) Style Form") that splits input fields across three clean sections. The form validates all user input at each stage before allowing progress, enhancing the registration experience.

---

##  File Directory

- [index.html](./index.html): Page structure defining the steps, progress indicators, form fields, and error slots.
- [style.css](./style.css): Progress bar animations, interactive transitions, button layouts, and styling tokens.
- [script.js](./script.js): Step navigation handlers, input validator logic, and progress bar updates.

---

##  Features & Functionality

1. **Step-by-Step Navigation**:
   - **Step 1: Personal Info** (Name and Email Address)
   - **Step 2: Contact Details** (Phone Number and City)
   - **Step 3: Security** (Password and Password Confirmation)
   - Includes "Next" and "Back" controls to smoothly traverse form steps.
2. **Dynamic Progress Indicator**:
   - A visual progress bar at the top displays the user's completion status.
   - Calculates the progress width percentage dynamically as the user advances through the form.
3. **Step Validation Rules**:
   - **Step 1**: Name must not be empty; email must contain an `@` character.
   - **Step 2**: Phone number must contain exactly 10 digits (`^[0-9]{10}$`).
   - **Step 3**: Password length must be at least 6 characters; passwords must match.
   - Shows inline error labels (e.g. "Invalid phone", "Passwords mismatch") below inputs on failed validation.
4. **Interactive Submission**:
   - Prevents default browser reload. Displays a success alert (`Form submitted successfully 🚀`) once all steps pass validation.

---

##  Technology Stack

- **Structure**: Semantic HTML5 (progress bar wrapper, field groups)
- **Styling**: Vanilla CSS3 layout elements
- **Interactivity**: Vanilla JavaScript (ES6 form event listeners, RegExp validator checks)

---

##  How to Run

Open [index.html](./index.html) directly in your browser.
