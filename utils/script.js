const notesContainer = document.getElementById("notes-container");
const submitButton = document.getElementById("submit-button");
const cardContainer = document.getElementById("card-container");
let choosenNote;

submitButton.addEventListener('click',()=>{
    cardContainer.innerHTML=""
    cardContainer.style.alignItems='center'
    cardContainer.insertAdjacentHTML('afterbegin',`
        <div class="image-thank">
        <img src="./images/illustration-thank-you.svg" alt="image star">
        </div>

        <p class="response">
            You selected ${choosenNote} out of 5
        </p>

        <h1 class="title" id="title">Thank you!</h1>

        <p class="paragraph">
            We appreciate you taking the time to give a rating. 
            If you ever need more support, don’t hesitate to get 
            in touch!
        </p>
    `)
})

const rate = (note)=>{
    const notesElements = document.getElementsByClassName("note")

    for (let i = 0; i < notesElements.length; i++) {
        const element = notesElements[i];
        if (element.textContent == note) {
            element.classList.add("selected-note")
            submitButton.disabled = false;
            submitButton.classList.add("submit-button-active")
            choosenNote=note;
        }else{
            element.classList.remove("selected-note");
        }
        
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    const notes = [5,4,3,2,1];
    submitButton.disabled = true;
    for (let i = 0; i < notes.length; i++) {
        const element = notes[i];
        notesContainer.insertAdjacentHTML("afterbegin", `
            <span class="note not-selected-note" onclick="rate(${element})">${element}<span/>
        `)
    }
})