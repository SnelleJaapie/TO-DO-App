// let storeList = []
//
//
// function addItems() {
//     console.log("Functie click werkt")
//     // const text = document.getElementById("itemInput").valueOf;
//     // const createListItem = "<li>" + text + "</li>";
//     // document.getElementById("itemList").appendChild(createListItem)
// }
// const buttonElement = document.getElementById("itemSubmit")
//
// buttonElement.addEventListener("click", addItems)
//

function getNames() {
    console.log('hallo');
}

const buttonElement = document.getElementById("itemSubmit");

// als er op dit element geklikt wordt, voer dan de functie getNames uit:
buttonElement.addEventListener('click', getNames);

console.log("Script afgerond!")