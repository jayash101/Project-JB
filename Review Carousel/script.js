// Local Review Data (Array of Objects)
const reviews = [
    {
        id: 1,
        name: "Dot Ramsey",
        job: "Web Developer",
        description:
            "I am pleasantly surprised at the ease of use and quality of this mouse. I plugged it into my PC, which is running Zorin OS (Linux) and all the buttons and maneuverability worked straight away without me having to do anything.",
        img: "/Review Carousel/person1.jpg"
    },

    {
        id: 2,
        name: "Cozumel Lady",
        job: "Shopkeeper",
        description:
            "It's a cool shirt, but after washing, and following the washing instructions, the center fold and collar creased into an ugly fold. Thank you so much for your product. I really loved it.",
        img: "/Review Carousel/person2.jpg"
    },

    {
        id: 3,
        name: "Sheria Joseph",
        job: "Retailer",
        description:
            "Shirt is great. Very thin and light but not see through. Can layer or wear on its own. Saw a suggestion to go one size up and glad I did. Hope everyone else does too.",
        img: "/Review Carousel/person3.jpg"
    },

    {
        id: 4,
        name: "Deirdre Stokes",
        job: "Book writer",
        description:
            "I loved this book, the author Jamie story was so inspiring and is an excellent reminder that you should never give up just because one door closes, there is always another door that will open for you!",
        img: "/Review Carousel/person4.jpg"
    },

    {
        id: 5,
        name: "English Professor",
        job: "Photographer",
        description:
            "Believe It by Jamie Kern Lima is an incredibly moving and inspiring memoir that captivated me from the very beginning. After witnessing Ms. Lima's impactful speech at the BuiltHow Conference, I was compelled to delve into her story.",
        img: "/Review Carousel/person5.jpg"
    }
]

const photo = document.querySelector(".photo");
const personName = document.querySelector(".name");
const profession = document.querySelector(".profession");
const review = document.querySelector(".review");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const randomizerButton = document.querySelector(".randomizerButton");

// Starting index
let currentIndex = 0;

// Browser Loading Event
window.addEventListener("DOMContentLoaded", () => {
    showCarousel(currentIndex);
});

// Load item
const showCarousel = function (index){
    const newItem = reviews[index];
    photo.src = newItem.img;
    personName.textContent = newItem.name;
    profession.textContent = newItem.job;
    review.textContent = newItem.description;
}

// Prev button Event
prevButton.addEventListener("click", () => {
    if(currentIndex === 0){
        currentIndex = reviews.length - 1;
    }
    else{
        currentIndex--;
    }
    showCarousel(currentIndex);
});

// Next button Event
nextButton.addEventListener("click", () => {
    if(currentIndex === reviews.length - 1){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    showCarousel(currentIndex);
});

// Randomizer button Event
randomizerButton.addEventListener("click", () =>{
    const randomIndex = Math.floor(Math.random() * reviews.length - 1);
    currentIndex = randomIndex;
    showCarousel(currentIndex);
});