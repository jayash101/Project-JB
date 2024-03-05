// Array of Menu Item objects
const menu = [
    {
        id: 1,
        title: "Californistrami",
        category: "breakfast",
        img: "/Restaurant Menu Page/Images/item1.webp",
        price: 13.00,
        description: "Californistrami Turkey with pastrami spice, melted swiss, green chile, the works, ranch, pepperoncini, avocado, on Dutch crunch."
    },

    {
        id: 2,
        title: "BYO Sando",
        category: "breakfast",
        img: "/Restaurant Menu Page/Images/item2.webp",
        price: 12.00,
        description: "BYO Sando with your favorite options! Don't forget to add some of our amazing sauces and extras to your creation!"
    },

    {
        id: 3,
        title: "Dutch Punch",
        category: "lunch",
        img: "/Restaurant Menu Page/Images/item3.webp",
        price: 13.00,
        description: "Smoked turkey, extra bacon, jalapeño Havarti, red onion, tomato, romaine, avocado, chipotle mayo, on Dutch crunch."
    },

    {
        id: 4,
        title: "Turkey Pesto",
        category: "lunch",
        img: "/Restaurant Menu Page/Images/item4.webp",
        price: 13.00,
        description: "Roast Turkey, melted sharp provolone, home made basil pesto, mayo, tomato, romaine on a toasted French roll."
    },

    {
        id: 5,
        title: "Jalapeno Popper",
        category: "breakfast",
        img: "/Restaurant Menu Page/Images/item5.webp",
        price: 12.50,
        description: "Smoked turkey, scallion whipped cream cheese, Duke's Mayo, red onion, pickle, tomato, romaine, house hot sauce, avocado, jalapenos, toasted Dutch crunch."
    },

    {
        id: 6,
        title: "California Turkey",
        category: "lunch",
        img: "/Restaurant Menu Page/Images/item6.webp",
        price: 13.00,
        description: "Roast turkey, Ortega Chile, melted pepper jack, the works with avocado on toasted sliced sourdough."
    },

    {
        id: 7,
        title: "Tropical Vacation",
        category: "breakfast",
        img: "/Restaurant Menu Page/Images/item7.webp",
        price: 13.00,
        description: "Roast Turkey, jalapeño Havarti cheese, the works with romaine, sprouts, avocado, honey mustard and cranberry on sliced sourdough."
    },

    {
        id: 8,
        title: "22OZ. Fountain Soda",
        category: "shakes",
        img: "/Restaurant Menu Page/Images/item8.webp",
        price: 13.00,
        description: "CRAFT SODAS MADE WITH REAL CANE SUGAR! WE ALSO HAVE OG COKE AND DIET COKE!"
    }
];

const mainMenu = document.querySelector(".mainMenu");
const filterButtons = document.querySelectorAll(".filterButton");

// Map the menu item
const filterMenu = (menuItems) => {
    let displayMenu = menuItems.map(item => {

        return `<article class="menuItem">

            <div class="image">
                <img src="${item.img}" alt="${item.title}">
            </div>

            <div class="content">

                <div class="topContent">
                    <div class="title">${item.title}</div>
                    <div class="price">$${(item.price).toFixed(2)}</div>
                </div>
                
                <div class="bottomContent">
                    <div class="description">
                        ${item.description}
                    </div>
                </div>
            </div>

        </article>`;
    });

    displayMenu = displayMenu.join("");
    mainMenu.innerHTML = displayMenu;
}

// DOM Content Load Event
window.addEventListener("DOMContentLoaded", () => {
    filterMenu(menu);
});



// Filter Buttons to filter the items
filterButtons.forEach(filterButton => {
    if (filterButton.textContent === "All") {
        filterButton.addEventListener("click", () => {
            filterMenu(menu);
        });
    }

    else if (filterButton.textContent === "Breakfast") {
        filterButton.addEventListener("click", () => {
            let breakfastItems = menu.filter(item => {
                return item.category === "breakfast";
            });

            filterMenu(breakfastItems);
        });
    }

    else if (filterButton.textContent === "Lunch") {
        filterButton.addEventListener("click", () => {
            let lunchItems = menu.filter(item => {
                return item.category === "lunch";
            });

            filterMenu(lunchItems);
        });
    }

    else{
        filterButton.addEventListener("click", () => {
            let shakesItems = menu.filter(item => {
                return item.category === "shakes";
            });

            filterMenu(shakesItems);
        });
    }
});