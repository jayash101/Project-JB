const images = document.querySelectorAll(".images");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const navigators = document.querySelectorAll(".navigators");

let imageIndex = 0;
let intervalID = null;

// Function to initialize the images
const initializeImages = () => {
    // Only move slides if there is more than one slide
    if(images.length > 0){
        images[imageIndex].classList.add("displayImage");
        intervalID = setInterval(nextImage, 5000);
    }
}

// Function to show current images
const showImages = function(index){

    // Continue this function for each image
    images.forEach(image => {
        // Remove current image
        image.classList.remove("displayImage");

        // Add required image
        images[index].classList.add("displayImage");
    })
}

// Function to move to the next image
const nextImage = function(){
    // If current image is the last image then move to the first image
    if(imageIndex === images.length - 1){
        imageIndex = 0;
        showImages(imageIndex);
    }
    else{
        imageIndex++;
        showImages(imageIndex);
    }
}

// Function to move to the previous image
const prevImage = function(){
    // If current image is the first image then move to the last image
    if(imageIndex === 0){
        imageIndex = images.length - 1;
        showImages(imageIndex);
    }
    else{
        imageIndex--;
        showImages(imageIndex);
    }
}


// Call the image intialization function on HTML refresh
document.addEventListener("DOMContentLoaded", initializeImages);

// Click event for next button
next.addEventListener("click", event => {
    nextImage();
})

// Click event for previous button
prev.addEventListener("click", event => {
    prevImage();
})

// Click event for navigator buttons
navigators.forEach(navigator => {
    navigator.addEventListener("click", event => {
        switch(navigator){
            case navigators[0]:
                showImages(0);
                break;
            
            case navigators[1]:
                showImages(1);
                break;

            case navigators[2]:
                showImages(2);
                break;

            case navigators[3]:
                showImages(3);
                break;

            case navigators[4]:
                showImages(4);
                break;

            case navigators[5]:
                showImages(5);
                break;
        }
    })
})