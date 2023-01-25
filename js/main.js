const myForm = document.getElementsByClassName("forms")[0];

myForm.addEventListener('submit', infoGet);

function infoGet (event) {
    event.preventDefault();
    console.log(myForm.name.value);
    console.log(myForm.surname.value);
    generateTable();
}


function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i=0; i<5; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j <1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(myForm.name.value);
            cell.appendChild(cellText);
            row.appendChild(cell);
            const cellSur = document.createElement("td");
            const cellTextSur = document.createTextNode(myForm.surname.value);
            cellSur.appendChild(cellTextSur);
            row.appendChild(cellSur);
            const cellDoB = document.createElement("td");
            const cellTextDoB = document.createTextNode(myForm.DoB.value);
            cellDoB.appendChild(cellTextDoB);
            row.appendChild(cellDoB);
        }

        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}
