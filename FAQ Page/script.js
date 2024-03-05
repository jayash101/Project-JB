const questions = document.querySelectorAll(".ques");

questions.forEach(question => {
    const button = question.querySelector(".buttons");

    button.addEventListener("click", () => {
        
        questions.forEach(item => {
            if (item !== question) {
                item.nextElementSibling.classList.remove("showAnswer");
            }
        });

        question.nextElementSibling.classList.toggle("showAnswer");
        plus.classList.toggle("hideButton");
        minus.classList.toggle("minus");
    });
});