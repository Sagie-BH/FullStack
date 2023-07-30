
$(document).ready(function () {
    const form = $('#validateForm');
    const btnSubmit = $('#btnSubmit');
    const inputAreas = form.find('.userInput');
    const objDataTableDiv = $('#objDataTableDiv');
    let objArr = [];

    // Utility function to validate an input field
    const validateInput = (element, validationFn, errorMessage) => {
        if (validationFn(element.val())) {
            element.removeClass('is-invalid').addClass('is-valid');
            return true;
        } else {
            element.removeClass('is-valid').addClass('is-invalid');
            element[0].setCustomValidity(errorMessage);
            element[0].reportValidity();
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
        form[0].reset();
        inputAreas.removeClass('is-valid is-invalid');
        objArr.push({});
        btnSubmit.removeClass('my-btn-success');
    };

    // Update the table with the new data
    const updateTable = () => {
        const tableHeaders = Object.keys(objArr[0]);

        const table = $('<table></table>').attr('id', 'jsonTable').addClass('table');
        const headerRow = $('<tr></tr>');
        tableHeaders.forEach((header) => {
            $('<th></th>').text(header.charAt(0).toUpperCase() + header.slice(1)).appendTo(headerRow);
        });
        table.append(headerRow);

        objArr.forEach((data) => {
            const row = $('<tr></tr>');
            tableHeaders.forEach((header) => {
                $('<td></td>').text(data[header]).appendTo(row);
            });
            table.append(row);
        });

        objDataTableDiv.empty().append(table);
    };

    // Handle form submission
    form.on('submit', (e) => {
        e.preventDefault();
        if (isFormValid()) {
            const formData = {
                id: form.find('#objId').val(),
                fullName: form.find('#objName').val(),
                email: form.find('#objEmail').val(),
                course: form.find('#objCourse').val(),
                grade: form.find('#objGrade').val(),
                active: form.find('#isActive').prop('checked'),
                date: form.find('#datetime-input').val(),
            };
            objArr.push(formData);
            updateTable();
            resetForm();

            // Display form submission message
            const submissionMessage = $('<div></div>').addClass('alert alert-success my-3').text('Form submitted successfully!');
            form.append(submissionMessage);
            setTimeout(() => {
                submissionMessage.remove();
            }, 3000); // Remove the success message after 3 seconds
        } else {
            btnSubmit.addClass('myDangerStyle');
        }
    });

    // Event listeners for focusout validation
    form.find('#objId').on('focusout', () => validateInput(form.find('#objId'), isValidID, 'ID must be a number with 8 to 9 digits.'));
    form.find('#objName').on('focusout', () => validateInput(form.find('#objName'), isValidFullName, 'Please enter a valid name.'));
    form.find('#objEmail').on('focusout', () => validateInput(form.find('#objEmail'), isValidEmail, 'Please enter a valid email address.'));
    form.find('#objCourse').on('change', () => validateInput(form.find('#objCourse'), isValidCourse, 'Please choose a course.'));
    form.find('#objGrade').on('focusout', () => validateInput(form.find('#objGrade'), isValidGrade, 'Please choose a grade greater than 0.'));
    form.find('#isActive').on('change', () => validateInput(form.find('#isActive'), (value) => true, '')); // No validation needed for the checkbox
    form.find('#datetime-input').on('change', () => validateInput(form.find('#datetime-input'), (value) => true, '')); // No validation needed for the date input
});
