const multipleChoise = document.querySelector(".multiple-choise");
const message = document.querySelector(".message");

multipleChoise.addEventListener("click", (e) => {

    buttons = multipleChoise.children;
    for (const button of buttons){
        button.style.background = "#d9edff";
    }

    if (e.target.classList.contains("correct")){
        e.target.style.background = "green"
        message.style.visibility = "visible"
        message.textContent = "Correct!"
    } else if (e.target.classList.contains("answer")){
        e.target.style.background = "red"
        message.style.visibility = "visible"
        message.textContent = "Incorrect"
    }
});

const input = document.querySelector(".input");
const freeButton = document.querySelector(".free-button");
const message2 = document.querySelector(".message-2");

freeButton.addEventListener("click", () => {
    if (input.value.toLowerCase() != "william shakespeare"){
        input.style.background = "red";
        message2.style.visibility = "visible"
        message2.textContent = "Incorrect"
    } else{
        message2.style.visibility = "visible"
        message2.textContent = "Correct!"
        input.style.background = "green";
    }
});

