// Tab data
const data = [
    {
        id: 1,
        title: "History",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis ab sit a voluptates voluptatum quas ipsum tenetur commodi architecto!"
    },

    {
        id: 2,
        title: "Vision",
        content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora odit ut velit corporis dolor! Ducimus nemo quia expedita dignissimos ratione."
    },

    {
        id: 3,
        title: "Goals",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi hic ducimus pariatur ex perspiciatis ab cum officiis veniam eius iste!"
    }
];

const buttons = document.querySelectorAll(".btn");
const title = document.querySelector(".descriptionContainer h1");
const content = document.querySelector(".descriptionContainer p");

// Window load event
window.addEventListener("DOMContentLoaded", () => {
    buttons[0].classList.add("addColor");
})

// Button event 
buttons.forEach(button => {
    button.addEventListener("click", () => {
        for(let i = 0; i < data.length; i++){
            if(button.textContent === data[i].title){
                title.textContent = data[i].title;
                content.textContent = data[i].content;
                buttons[i].classList.add("addColor");
            }
            else{
                buttons[i].classList.remove("addColor");
            }
        }
    })
})