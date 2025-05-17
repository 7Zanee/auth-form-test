
# Test task created by Zane Ērgle on 17.05.2025
## Task 1: Based on requirements create 3 manual test cases
**TC1 - Successful Registration**
1. Enter 'Test' in field Username<br>
2. Enter 'test@test.com' in field Email<br>
3. Enter 'Password1' in field Password<br>
4. Enter 'Password1' in field Password to confirm the password<br>
5. Click Submit<br>
**Expected result:** User is redirected to Home Page. Success message: "You have registered successfully!" is displayed

**TC2 - Validate field 'Username'**
1. Leave the Username field blank → Submit the form.<br>
**Expected Result:** Error: "Username is required".
2. Enter ab (2 characters) → Submit the form.<br>
**Expected Result:** Error: "Username must be at least 3 characters".
3. Enter thisisaverylongusername123 (more than 20 characters) → Submit the form.<br>
**Expected Result:** Error: "Username must be at most 20 characters".
4. Enter user@123 (contains special character) → Submit the form.<br>
**Expected Result:** Error: "Username must be alphanumeric".
5. Enter user123 (valid) → Submit the form.<br>
**Expected Result:** No error for Username field.

**TC3 - Validate Email Field Precondition: Use valid data for all fields except Email during each step.**

1. Leave the Email field blank → Submit the form.<br>
**Expected Result:** Error: "Email is required".
2. Enter useremail.com → Submit the form.<br>
**Expected Result:** Error: "Invalid email format".
3. Enter user@ → Submit the form.<br>
**Expected Result:** Error: "Invalid email format".
4. Enter user@example.com (valid) → Submit the form.<br>
**Expected Result:** No error for Email field.

## Task 2: Report at least 1 Bug You have found during the testing Bug Report
### Bug Report: Missing Visual Highlight on Invalid Fields
**Title:** Fields with validation errors are not highlighted<br>

**Severity:** Medium<br>
**Priority:** High<br>

**Environment:** URL: https://auth-home-task.vercel.app/<br>
Browser: Chrome 124.0.0 OS: Windows 11<br>
Preconditions: User is on the registration page.<br>

**Steps to reproduce:**
1. Open the registration page.
2. Leave all fields empty.
3. Click the Submit button.

**Expected result:** Each required field (Username, Email, Password, Confirm Password) should be visually highlighted (e.g., red border or background).
This helps users easily identify which fields contain errors, as mentioned in the requirement.

**Actual result:** Fields are not highlighted

## Task 3: Based on requirements automate 1 manual test case using playwright

```
import { test, expect } from '@playwright/test';

test('Successful registration', async ({ page }) => {
  // Go to the app
  await page.goto('https://auth-home-task.vercel.app/');

  // Navigate to registration form
  await page.getByRole('button', { name: 'Go to Registration' }).click();

  // Fill out form fields with valid data
  await page.locator('input[name="username"]').fill('testuser');
  await page.locator('input[name="email"]').fill('testuser@test.com');
  await page.locator('input[name="password"]').fill('Password1');
  await page.locator('input[name="confirmPassword"]').fill('Password1');

  // Click Register
  await page.getByRole('button', { name: 'Register' }).click();

  // ✅ Assert success message
  await expect(page.locator('text=You have registered successfully!')).toBeVisible();

  // ✅ Optional: Assert redirection to Home Page
  await expect(page).toHaveURL(/.*home/i);
});
 ```
## Task 4: Add points to improve form's UI/UX

1. Add labels to input fields (not only placeholders).
2. Provide real-time validation feedback as user types to provide instant feedback to the user.
3. Password requirements tooltip on focus.
4. Show a loading spinner after clicking Submit.
5. Password visibility toggle
6. Ensure responsive design across all screen sizes and devices
7. Trigger field-level validation independently for better user guidance
8. Disable the 'Register' button until the form is completely and correctly filled out
9. Use clear and concise error messages to guide users in correcting their inputs

## Task 5: Anything You would improve/specify more in the existing requirements

1. Specify that the username should not contain special characters.
2. Provide a more detailed description of valid email format
3. Specify whether username/email must be unique.

## Task 6: What else can be tested?

1. Cross-browser Testing: Verify the form's functionality across different browsers and versions.
2. Boundary Testing: Test the boundary values for each field (e.g., minimum and maximum lengths).
3. Accessibility Testing: Ensure the form is accessible to users with disabilities (e.g., screen readers, keyboard navigation).
4. Performance Testing: Test the form's performance under different network conditions and loads.
5. Security Testing: Check for vulnerabilities such as SQL injection, XSS, and CSRF.

Link to app: https://auth-home-task.vercel.app/ 

