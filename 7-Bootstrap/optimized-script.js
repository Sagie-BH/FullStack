const form = document.getElementById('validateForm');
const btnSubmit = document.getElementById('btnSubmit');
const inputAreas = form.getElementsByClassName('userInput');
const objDataTableDiv = document.getElementById('objDataTableDiv');
let objArr = [];

// Utility function to validate an input field
const validateInput = (element, validationFn, errorMessage) => {
    if (validationFn(element.value)) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        return true;
    } else {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        element.setCustomValidity(errorMessage);
        element.reportValidity();
        return false;
    }
};

// Validation functions for different fields
const isValidID = (value) => /^[0-9]{8,9}$/.test(value);
const isValidFullName = (value) => value.trim().length > 3;
const isValidEmail = (value) => /\S+@\S+/.test(value.toLowerCase());
const isValidCourse = (value) => value !== "";
const isValidGrade = (value) => Number(value) > 0;

// Check if the form is valid
const isFormValid = () => {
    return Array.from(inputAreas).every((input) => {
        return input.checkValidity();
    });
};

// Reset form fields and validation
const resetForm = () => {
    form.reset();
    Array.from(inputAreas).forEach((input) => {
        input.classList.remove('is-valid');
        input.classList.remove('is-invalid');
    });
    objArr.push({});
    btnSubmit.classList.remove('my-btn-success');
};

// Update the table with the new data
const updateTable = () => {
    const tableHeaders = Object.keys(objArr[0]);

    const table = document.createElement('table');
    table.setAttribute('id', 'jsonTable');
    table.classList.add('table');

    const headerRow = table.insertRow();
    tableHeaders.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header.charAt(0).toUpperCase() + header.slice(1);
        headerRow.appendChild(th);
    });

    objArr.forEach((data) => {
        const row = table.insertRow();
        tableHeaders.forEach((header) => {
            const cell = row.insertCell();
            cell.textContent = data[header];
        });
    });

    objDataTableDiv.innerHTML = "";
    objDataTableDiv.appendChild(table);
};

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isFormValid()) {
        const formData = {
            id: form.objId.value,
            fullName: form.objName.value,
            email: form.objEmail.value,
            course: form.objCourse.value,
            grade: form.objGrade.value,
            active: form.isActive.checked,
            date: form["datetime-input"].value,
        };
        objArr.push(formData);
        updateTable();
        resetForm();

        // Display form submission message
        const submissionMessage = document.createElement('div');
        submissionMessage.classList.add('alert', 'alert-success', 'my-3');
        submissionMessage.textContent = 'Form submitted successfully!';
        form.appendChild(submissionMessage);
        setTimeout(() => {
            form.removeChild(submissionMessage);
        }, 3000); // Remove the success message after 3 seconds
    } else {
        btnSubmit.classList.add('myDangerStyle');
    }
});


// Event listeners for focusout validation
form.objId.addEventListener('focusout', () => validateInput(form.objId, isValidID, 'ID must be a number with 8 to 9 digits.'));
form.objName.addEventListener('focusout', () => validateInput(form.objName, isValidFullName, 'Please enter a valid name.'));
form.objEmail.addEventListener('focusout', () => validateInput(form.objEmail, isValidEmail, 'Please enter a valid email address.'));
form.objCourse.addEventListener('change', () => validateInput(form.objCourse, isValidCourse, 'Please choose a course.'));
form.objGrade.addEventListener('focusout', () => validateInput(form.objGrade, isValidGrade, 'Please choose a grade greater than 0.'));
form.isActive.addEventListener('change', () => validateInput(form.isActive, (value) => true, '')); // No validation needed for the checkbox
form["datetime-input"].addEventListener('change', () => validateInput(form["datetime-input"], (value) => true, '')); // No validation needed for the date input
