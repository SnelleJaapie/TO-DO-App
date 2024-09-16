let storeList = []


function addItems() {
    const itemlist = document.getElementById("itemList")
    const text = document.getElementById("itemInput");

    const node = document.createElement("li")
    const nodemerge = node.textContent = text



    itemlist.appendChild(nodemerge)
    console.log("Functie click werkt")
}

const buttonElement = document.getElementById("itemSubmit")

buttonElement.addEventListener("click", addItems)



