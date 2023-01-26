const myForm = document.getElementsByClassName("forms")[0];

myForm.addEventListener('submit', infoGet);
myForm.addEventListener('submit', hideForm);

function infoGet (event) {
    event.preventDefault();
}

function hideForm () {
    myForm.style.display = 'none'; 
    generateTable();
}


function generateTable() {

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Name of user is ${myForm.name.value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Surname of user is ${myForm.surname.value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`User's date of birth is ${myForm.DoB.value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`User's sex is ${myForm.sex.value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`The town the user is from is ${myForm.town.value}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`The language the user is proficient in ${myForm.Ukrainian.name} language - ${myForm.Ukrainian.checked}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`The language the user is proficient in ${myForm.English.name} language - ${myForm.English.checked}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`The language the user is proficient in ${myForm.Russian.name} language - ${myForm.Russian.checked}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    for (let i=0; i<1; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`The language the user is proficient in ${myForm.Polish.name} language - ${myForm.Polish.checked}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}
