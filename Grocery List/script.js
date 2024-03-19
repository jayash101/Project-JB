const inputSection = document.querySelector(".inputSection");

const myForm = document.querySelector(".myForm");
const myInput = myForm.querySelector(".myInput");

myForm.addEventListener("submit", event => {
    event.preventDefault();
    const notification = document.createElement("div");

    if(!myInput.value){
        notification.textContent = "Please enter an item";
        notification.classList.remove("greenNotification");
        notification.classList.add("redNotification");
        inputSection.prepend(notification);
    }
    else{
        notification.textContent = "Item Added Successfully";
        notification.classList.remove("redNotification");
        notification.classList.add("greenNotification");
        inputSection.prepend(notification);
    }
})