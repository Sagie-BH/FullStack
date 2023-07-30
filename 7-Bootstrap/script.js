const id = document.getElementById('objId');
const fullName = document.getElementById('objName');
const email = document.getElementById('objEmail');
const course = document.getElementById("objCourse");
const grade = document.getElementById("objGrade");
const active = document.getElementById("isActive");
const date = document.getElementById("datetime-input");

const btnSubmit = document.getElementById('btnSubmit');

const inputAreas = document.getElementsByClassName('userInput');
const validateForm = document.getElementById('validateForm');

var valid = false;

confirmElement = (element) => {
    element.setCustomValidity('');
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    valid = true;
};
rejectElement = (element, poppinMessage) => {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.setCustomValidity(poppinMessage);
    element.reportValidity();
    valid = false;
};

// checkEmptyInput = () => {
//     Array.from(inputAreas).forEach((input) => {
//         if (input.innerText == "" || input.selectedOptions[0]) {
//             rejectElement(input, "Please Fill Out Field")
//             btnSubmit.classList.remove('my-btn-start');
//             btnSubmit.classList.add('myDangerStyle');
//         }
//     })
// };


id.addEventListener('focusout', () => {
    if (isNaN(id.value)) {
        rejectElement(id, 'ID Must Be A Number');

    } else if (id.value.length == 8 || id.value.length == 9) {
        confirmElement(id);

    } else {
        rejectElement(id, "Please Enter A Valid ID");
    }
});

fullName.addEventListener('focusout', () => {
    if (fullName.value.length > 3) {
        confirmElement(fullName);
    } else {
        rejectElement(fullName, "Please Enter A Valid Name");
    }
});

email.addEventListener('focusout', () => {
    const expression = /\S+@\S+/;
    if (expression.test(email.value.toLowerCase())) {
        confirmElement(email);
    } else {
        rejectElement(email, 'Please Enter A Valid Email Adress')
    }
});

course.addEventListener('change', () => {
    confirmElement(course);
})

date.addEventListener('change', () => {
    confirmElement(date);
})

active.addEventListener('change', () => {
    if (active.checked) {
        confirmElement(active);
    } else {
        rejectElement(active, 'Please Check Box');
    }
})

grade.addEventListener('focusout', () => {
    if (grade.value == 0) {
        rejectElement(grade, 'How Did You Get 0  /:')
    } else {
        confirmElement(grade);
    }
})
validateForm.addEventListener('focusout', () => {
    btnSubmit.classList.remove('myDangerStyle');
    btnSubmit.classList.remove('my-btn-success');
    btnSubmit.classList.add('my-btn-start');
})

let objArr = [];
let jsonObj;

addObjToArr = () => {
    jsonObj = {
        id: id.value,
        fullName: fullName.value,
        email: email.value,
        course: course.value,
        grade: grade.value,
        active: active.checked,
        date: date.value
    };

    jsonStringData = JSON.stringify(jsonObj);
    objArr.push(jsonStringData);
}

createJsonTable = () => {
    var headers = Object.keys(jsonObj)
    var table = document.createElement('table');
    table.setAttribute('id', 'jsonTable');
    table.classList.add('table');
    var tr = table.insertRow(-1);

    for (var i = 0; i < headers.length; i++) {
        var th = document.createElement("th");
        th.classList.add('col');
        th.innerHTML = headers[i].charAt(0).toUpperCase() + headers[i].slice(1);
        tr.appendChild(th);
    }

    var divContainer = document.getElementById("objDataTableDiv");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
addObjToTable = () => {
    document.getElementById('jsonTable').innerHTML += `<tr>
    <td> ${jsonObj.id} </td>
    <td> ${jsonObj.fullName} </td>
    <td> ${jsonObj.email} </td>
    <td> ${jsonObj.course} </td>
    <td> ${jsonObj.grade} </td>
    <td> ${jsonObj.active} </td>
    <td> ${jsonObj.date} </td>
    </tr>`
}

validateForm.addEventListener('submit', (e) => {
    if (!valid) {
        e.preventDefault();
        btnSubmit.classList.remove('my-btn-start');
        btnSubmit.classList.add('myDangerStyle');
    } else {
        addObjToArr();
        Array.from(inputAreas).forEach((input) => {
            input.classList.remove('is-valid');
            input.value = '';
        })
        active.checked = false;
        btnSubmit.classList.remove('my-btn-start')
        btnSubmit.classList.add('my-btn-success');
        if (document.getElementById('jsonTable') == null) {
            createJsonTable();
        }
        addObjToTable();
    }
});