
# Multi-Page Website – Stage 1 (Continuation of Stage 0)


View the website live here: [https://zainabraji-multi-page-website-stage1.netlify.app/]
## Description
This project is a continuation of the Stage 0 task where a single profile card component was created.  
In Stage 1, the project evolves into a **multi-page application**, adding two new pages:

1. **Contact Us Page** – Includes a form with validation and accessibility features.  
2. **About Me Page** – A reflective page sharing personal thoughts, goals, and areas of development.  

The website emphasises **semantic HTML, accessibility and responsiveness**

---

## Pages

### 1. Contact Us Page
- **Purpose:** Allows users to submit contact information and a message.  
- **Data Test IDs for Testing:**
  - Full name — `test-contact-name`
  - Email — `test-contact-email`
  - Subject — `test-contact-subject`
  - Message — `test-contact-message`
  - Submit button — `test-contact-submit`
  - Error messages — `test-contact-error-<field>` (e.g., `test-contact-error-email`)
  - Success message — `test-contact-success`
  - 
- **Validation Rules:**
  - All fields are required.
  - Email must be valid (e.g., `name@example.com`).
  - Message must be at least 10 characters.
  - Success message displays only after valid submission.
  - 
- **Accessibility Features:**
  - `<label>` elements linked to inputs using `for`.
  - Error messages tied to inputs with `aria-describedby`.
  - Keyboard accessible form.

### 2. About Me Page
- **Purpose:** Share reflections, goals, and areas for growth.  
- **Data Test IDs for Testing:**
  - Bio — `test-about-bio`
  - Goals in this program — `test-about-goals`
  - Areas of low confidence — `test-about-confidence`
  - Note to future self — `test-about-future-note`
  - Extra thoughts — `test-about-extra`
- **Semantic Structure:**
  - Wrapped with `<main data-testid="test-about-page">`
  - Each area enclosed in `<section>`  
  - Proper headings (`<h2>`, `<h3>`) for clarity

---

## Features
- **Semantic HTML** throughout (main, section, headings).  
- **Accessible** (labels, ARIA associations, alt text).  
- **Responsive** across mobile, tablet, and desktop.  
- **Keyboard navigable**.  
- Modular, readable, and consistent code.

---

Technologies Used

HTML5

CSS3 (Responsive Layouts)

JavaScript (for form validation)


## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/YourRepoName.git
