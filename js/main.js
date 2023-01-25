const myFrom = document.getElementsByTagName('form')[0];
myFrom.addEventListener("submit", infoGet);

function infoGet (event) {
    event.preventDetault();
    console.log(myForm.name.value);
    console.log(myForm.surname.value);
}