// Input Area
const inputSection = document.querySelector(".inputSection");

// Form
const myForm = document.querySelector(".myForm");

// Input Box
const myInput = myForm.querySelector(".myInput");

// List items container
const itemsContainer = document.querySelector(".itemsContainer");

// Item Section
const itemSection = document.querySelector(".itemSection");

// Clear Button
const clearButton = document.querySelector(".clearButton");

// Form Submit Event
myForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!myInput.value) {
        alert("Please enter an item", "red", "green");
    }
    else {
        itemsContainer.style.display = "block";
        addItem();
        myInput.value = "";
    }
});

// Clear Button Event
clearButton.addEventListener("click", clearItems);


// -------- FUNCTIONS ----------

// Alert function
function alert(text, classA, classB) {
    variable = document.createElement("div");
    variable.textContent = text;
    variable.classList.add(`${classA}Notification`);
    variable.classList.remove(`${classB}Notification`);
    inputSection.prepend(variable);

    setTimeout(() => {
        variable.remove();
    }, 1000);
}

// Add items function
function addItem() {
    // New Item
    const newItem = document.createElement("section");
    newItem.innerHTML = `<article class="items">
        <input type="text" class="item" value="${myInput.value}" readonly>

        <div class="buttonContainer">
            <button class="editButton">
                <ion-icon name="create-outline" class="iconCreate"></ion-icon>
                <ion-icon name="checkmark-outline" class="iconCheckmark"></ion-icon>
            </button>

            <button class="deleteButton">
                <ion-icon name="trash-bin-outline" class="icon"></ion-icon>
            </button>
        </div>
    </article>`;

    itemSection.appendChild(newItem);
    alert("Item Added Successfully", "green", "red");

    // Edit Button
    const editButton = newItem.querySelector(".editButton");

    // Delete Button
    const deleteButton = newItem.querySelector(".deleteButton");

    // List Item
    const subItem = newItem.querySelector(".item");

    // Two Icons
    const createBtn = editButton.querySelector(".iconCreate");
    const checkmarkBtn = editButton.querySelector(".iconCheckmark");
    checkmarkBtn.classList.add("hideButton");

    editButton.addEventListener("click", () => {
        subItem.classList.toggle("showBorder");
        subItem.toggleAttribute("readonly");

        if (checkmarkBtn.classList.contains("hideButton")) {
            checkmarkBtn.classList.remove("hideButton");
            createBtn.classList.add("hideButton");
        }
        else {
            checkmarkBtn.classList.add("hideButton");
            createBtn.classList.remove("hideButton");
        }
    });


    deleteButton.addEventListener("click", () => {
        itemSection.removeChild(newItem);

        if (itemSection.childElementCount === 0) {
            clearItems();
        }

        alert("Item deleted successfully", "red", "green");
    });
}

// Clear Items Function
function clearItems() {
    if (itemSection.childElementCount > 0) {
        itemSection.innerHTML = "";
    }

    myInput.value = "";
    itemsContainer.style.display = 'none';

    alert("All items cleared", "red", "green");
}
